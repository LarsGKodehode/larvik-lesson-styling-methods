import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// CSS
// Importing CSS stylesheets
import './styles/basic.css'
import './styles/palette.css'
import './styles/test.css'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
