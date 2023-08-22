import type { Request, Response } from 'express'
import axios from 'axios'
import React from 'react'

import { renderToPipeableStream, renderToReadableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { ABORT_DELAY, HOME_API_KEY, HOME_RPOMISE_API_KEY } from '../../constants'
import { wrapPromise } from '../../utils'

import App from '../../src/App'
import { SSRProvider } from '../../src/context/ssr'

export default async function renderHome(url: string, req: Request, res: Response) {
  res.socket?.on('error', (error) => console.error(error))

  let didError = false

  const assets = {
    'main.js': '/main.js',
    'main.css': '/main.css',
  }

  // todo : RSC 전략 필요 (클라이언트에서 하이드레이션 막아야함..)
  const postPromise = new Promise((res) => {
    setTimeout(() => {
      res(
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`).then(({ data }) => {
          return {
            ...data,
            isServer: true,
          }
        }),
      )
    }, 8000)
  })

  const homeData: { title: string; description: string } = await new Promise((res) => {
    setTimeout(() => {
      const homeData = {
        title: 'Check the page source in your browser!',
        description: 'this code show you how to use react server side rendering',
        test: {
          foo: {
            bar: 'waldo',
          },
        },
      }
      return res(homeData)
    }, 100)
  })
  let serverSideData: {
    [key: string]: unknown
  } = {}
  serverSideData[HOME_API_KEY] = JSON.stringify(homeData)
  serverSideData[HOME_RPOMISE_API_KEY] = wrapPromise(postPromise)

  // todo : crawler 처리
  let isCrawler = false

  const stream = renderToPipeableStream(
    <SSRProvider data={serverSideData}>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="stylesheet" href={assets['main.css']} />
          <title>{`test code!`}</title>
          <meta name="description" content={`code for test!`} />
        </head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<b>Enable JavaScript to run this app.</b>`,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `assetManifest = ${JSON.stringify(assets)};`,
            }}
          />
          {(serverSideData as object) && (
            <script id="__SERVER_DATA__" type="application/json">
              {JSON.stringify(serverSideData)}
            </script>
          )}
        </body>
        <div id="root">
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </div>
      </html>
    </SSRProvider>,
    {
      bootstrapScripts: [assets['main.js']],
      onShellReady() {
        if (isCrawler) return
        // Streaming이 시작 되기전 에러가 발생한다면 이 곳에서 error code를 접근합니다.
        res.statusCode = didError ? 500 : 200
        // 한글을 사용하기 떄문에 utf-8로 Content-type을 설정합니다.
        res.setHeader('Content-type', 'text/html;charset=UTF-8')
        stream.pipe(res)
      },
      onAllReady() {
        if (!isCrawler) return
        // If you don't want streaming, use this instead of onShellReady.
        // This will fire after the entire page content is ready.
        // You can use this for crawlers or static generation.
        res.statusCode = didError ? 500 : 200
        res.setHeader('Content-type', 'text/html;charset=UTF-8')
        stream.pipe(res)
      },
      onError(err) {
        didError = true
        console.error(err)
      },
    },
  )
  // 충분한 시간이(현제 10초) 지나면 SSR을 포기하고 CSR으로 전환합니다.
  setTimeout(() => stream.abort(), ABORT_DELAY)
}
