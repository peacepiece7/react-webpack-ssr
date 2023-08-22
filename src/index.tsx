import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { hydrateRoot } from 'react-dom/client'
import App from './App'

import './tailwind.css'

hydrateRoot(
  document.getElementById('root') as HTMLDivElement,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
