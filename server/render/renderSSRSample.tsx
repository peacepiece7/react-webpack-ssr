import type { Request, Response } from 'express'
import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { ABORT_DELAY } from '../../constants'
import { wrapPromise } from '../../utils'

import App from '../../src/App'
import { SSRProvider } from '../../src/context/ssr'

export default async function renderSSRSample(url: string, req: Request, res: Response) {
  res.socket?.on('error', (error) => console.error(error))

  let didError = false

  const data = {
    data: '',
  }

  const testData: { title: string }[] = await new Promise((res) => {
    setTimeout(() => {
      res([{ title: 'test 1' }, { title: 'test 2' }, { title: 'test3' }])
    }, 2000)
  })

  data.data = JSON.stringify(testData)

  const stream = renderToPipeableStream(
    <SSRProvider data={data}>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <title>{`test code!`}</title>
          <meta name="description" content={`code for test!`} />
        </head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<b>Enable JavaScript to run this app.</b>`,
            }}
          />
        </body>
        <div id="root">
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </div>
        {typeof data.data === 'string' && (
          <script id="__SERVER_DATA__" type="application/json">
            {data.data}
          </script>
        )}
      </html>
    </SSRProvider>,
    {
      // SSR시 bootstrapScripts를 지정해줘야 서버에서 js파일을 먼저 로드합니다.
      onShellReady() {
        // Streaming이 시작 되기전 에러가 발생한다면 이 곳에서 error code를 접근합니다.
        res.statusCode = didError ? 500 : 200
        // 한글을 사용하기 떄문에 utf-8로 Content-type을 설정합니다.
        res.setHeader('Content-type', 'text/html;charset=UTF-8')
        stream.pipe(res)
      },
      onError(x) {
        didError = true
        console.error(x)
      },
    },
  )
  // 충분한 시간이(현제 10초) 지나면 SSR을 포기하고 CSR으로 전환합니다.
  setTimeout(() => stream.abort(), ABORT_DELAY)
}

// * Example API URL
// https://jsonplaceholder.typicode.com/comments?postId=${postNumber}
// https://jsonplaceholder.typicode.com/posts/${postNumber}
