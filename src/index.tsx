import React, { Suspense, lazy } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App'

import './tailwind.css'

hydrateRoot(document.getElementById('root') as HTMLDivElement, <App />)
