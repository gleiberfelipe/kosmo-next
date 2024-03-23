import './App.css'
import React from 'react'
import Home from './pages/home'
import { useRoutes } from 'react-router-dom'

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
  ])
  return (
    <>
 {React.cloneElement(element, { key: location.pathname })}
    </>
  )
}

export default App
