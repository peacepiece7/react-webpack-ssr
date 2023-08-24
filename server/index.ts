import express from 'express'
import compress from 'compression'
import rootRouter from './route/root'
import renderHome from './render/renderHome'

// ! 포트번호 코드 webpack.config.js와 중복됨!
const PORT = process.env.PORT || 4000
const app = express()

app.use(compress())
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
