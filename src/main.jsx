import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import { UserCard } from './UserCard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <UserCard />
   <BrowserRouter />
  </React.StrictMode>,
)
