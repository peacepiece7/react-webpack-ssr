import express from 'express'
import renderHome from '../render/renderHome'

const router = express.Router()

router.get('/', (req, res) => {
  return renderHome(req.url, req, res)
})

export default router
