import React from 'react'
import type { Request, Response } from 'express'
import axios from 'axios'
import path from 'path'
import { ChunkExtractor } from '@loadable/server'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HOME_API_KEY, HOME_RPOMISE_API_KEY } from '../../constants'
import { wrapPromise } from '../../utils'
import App from '../../src/App'
import { SSRProvider } from '../../src/context/ssr'

export default async function renderHome(url: string, req: Request, res: Response) {
  res.socket?.on('error', (error) => console.error(error))

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
    }, 100)
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
  const webStats = path.resolve(__dirname, './web/loadable-stats.json')

  const webExtractor = new ChunkExtractor({ statsFile: webStats })

  const jsx = webExtractor.collectChunks(
    <SSRProvider data={serverSideData}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </SSRProvider>,
  )

  const html = renderToString(jsx)

  res.set('content-type', 'text/html')
  // prettier-ignore
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta name="viewport" content="width=device-width, user-scalable=no">
<meta name="google" content="notranslate">
<meta charSet="utf-8" />
${webExtractor.getLinkTags()}
${webExtractor.getStyleTags()}
</head>
<body>
<div id="root">${html}</div>
<script id="__SERVER_DATA__" type="application/json">${JSON.stringify(serverSideData)}</script>
${webExtractor.getScriptTags()}
</body>
</html>`)
}
