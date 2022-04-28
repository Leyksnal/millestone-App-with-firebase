import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Post from './components/Post'
import Views from './components/Views'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/views'} element={<Views/>}/>
        <Route path={'/post'} element={<Post/>}/>
      </Routes>
    </BrowserRouter>
  )
}
