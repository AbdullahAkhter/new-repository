import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContext from './context/AuthContext.jsx'
import User_context_provider from './context/UserContex.jsx'
import ProductContext from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <AuthContext>
      <User_context_provider>
        <ProductContext>
           <App />
        </ProductContext>
       
      </User_context_provider>

    </AuthContext>
  </BrowserRouter>
)
