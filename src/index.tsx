import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { hydrateRoot } from 'react-dom/client'
import App from './App'

import './tailwind.css'
import { loadableReady } from '@loadable/component'

loadableReady(() => {
  try {
    hydrateRoot(
      document.getElementById('root') as HTMLDivElement,
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
  } catch (error) {
    console.log('UnCaught error')
    console.log(error)
  }
})

// https://stackoverflow.com/questions/55263085/property-hot-does-not-exist-on-type-nodemodule-ts2339 module typescript 에러 해결
// https://github.com/webpack/webpack/issues/1790 HMR accept wildcard 문제
if (module.hot) {
  console.log('TEST')
  if (process.env.NODE_ENV === 'development') {
    module.hot.accept()
    setTimeout(() => {
      if (document.querySelectorAll('#root > div').length === 1) {
        console.warn('변경된 컴포넌트가 없기 떄문에 업데이트 되지 않습니다.')
        return
      }
      document.querySelector('#root > div')?.remove()
    }, 4000)
  }
}
