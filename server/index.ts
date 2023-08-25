import express from 'express'
import compress from 'compression'
import path from 'path'
import renderHome from './render/renderHome'

// ! 포트번호 코드 webpack.config.js와 중복됨!
const PORT = process.env.PORT || 4000
const app = express()
console.log('실행 환경 체크 : ', process.env.NODE_ENV)

if (process.env.NODE_ENV !== 'production') {
  console.log('개발 환경입니다. webpack-dev-middleware를 사용합니다.')
  const webpack = require('webpack')
  const webpackConfig = require('../webpack.client.config').map((config: any) => {
    // 빌드할 때 dist => dist/dist로 변경됨
    config.output.path = config.output.path.replace('dist/dist/', 'dist/').replace('dist\\dist\\', 'dist\\')
    return config
  })
  // https://webpack.kr/guides/development/#using-webpack-dev-middleware
  const webpackDevMiddleware = require('webpack-dev-middleware')
  // https://github.com/webpack-contrib/webpack-hot-middleware#documentation
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)

  app.use(
    webpackDevMiddleware(compiler, {
      writeToDisk: true,
      noInfo: true,
      publicPath: webpackConfig[0].output.publicPath,
    }),
  )
  app.use(webpackHotMiddleware(compiler))
}

app.use(compress())
app.use(express.static(path.resolve(__dirname)))
app.use(express.static('public'))
app.use(express.static('dist'))

// * Home 페이지로 이동합니다.
app.use('/', (req, res) => {
  renderHome(req.url, req, res)
})

app
  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
  .on('error', (error: Error & { code?: string }) => {
    const isPipe = (portOrPipe: number | string) => Number.isNaN(portOrPipe)
    const bind = isPipe(PORT) ? `Pipe ${PORT}` : `Port ${PORT}`
    switch (error.code) {
      // * 권한이 없는 경우
      case 'EACCES':
        console.error(bind + ' requires elevated privileges')
        process.exit(1)
      // * 이미 사용중인 포트인 경우
      case 'EADDRINUSE':
        console.error(bind + ' is already in use')
        process.exit(1)
      default:
        throw error
    }
  })
