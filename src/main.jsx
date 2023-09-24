import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  //El StrictMode renderiza dos veces los componentes en desarrollo para saber si hay errores 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
