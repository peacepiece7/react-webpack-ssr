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

// https://stackoverflow.com/questions/55263085/property-hot-does-not-exist-on-type-nodemodule-ts2339
if (module.hot) {
  module.hot.accept()
}
