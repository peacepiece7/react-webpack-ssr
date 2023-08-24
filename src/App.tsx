import React from 'react'
import { Routes, Route } from 'react-router-dom'
import loadable from '@loadable/component'
// const Home = loadable(() => import('./pages/Home'), { ssr: false })
// const Detail = loadable(() => import('./pages/Detail'), { ssr: false })

import Home from './pages/Home'
import Detail from './pages/Detail'
import Layout from './components/Layout'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Route>
    </Routes>
  )
}
