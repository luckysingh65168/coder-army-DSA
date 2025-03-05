import React from 'react'
import { Routes, Route } from "react-router-dom";

// components
import Nav from "./components/Navbar"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Sort from "./pages/Sort"
import Tree from "./pages/Tree"
import Graph from "./pages/Graph"
import Dp from "./pages/Dp"
import Page404 from "./pages/Page404"

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/sort' element={<Sort />} />
        <Route path='/tree' element={<Tree />} />
        <Route path='/graph' element={<Graph />} />
        <Route path='/dp' element={<Dp />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App  