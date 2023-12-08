import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { AuthProvider } from './contexts/AuthProvider.js'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
