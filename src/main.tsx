import React from 'react'
import ReactDOM from 'react-dom/client'
import { SpotiApp } from './SpotiApp.tsx'
import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SpotiApp />
  </React.StrictMode>,
)
