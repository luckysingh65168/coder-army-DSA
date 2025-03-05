import React from 'react'
import { Routes, Route } from "react-router-dom";

// components
import Home from "./components/Home"
import Page404 from "./components/Page404"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}

export default App  