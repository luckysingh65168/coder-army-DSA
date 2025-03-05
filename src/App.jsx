import React from 'react'
import { Routes, Route } from "react-router-dom";

// components
import Nav from "./components/Navbar"
import Home from "./components/Home"
import Search from "./components/Search"
import Sort from "./components/Sort"
import Tree from "./components/Tree"
import Graph from "./components/Graph"
import Dp from "./components/Dp"
import Page404 from "./components/Page404"

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