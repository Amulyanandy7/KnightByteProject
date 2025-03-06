import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import About from './About'
import Layout from './Layout';
import Franchise from './Franchise';
import Blog from './Blog';
import Menu from './Menu';
import FullMenu from './FullMenu';
/* import Login from './Login'; */
const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="Home" element={<Home/>}/>
    <Route path="Layout" element={<Layout/>}/>
            <Route path="About" element={<About/>}/>
            <Route path="Menu" element={<Menu/>}/>
            <Route path="Blog" element={<Blog/>}/>
            <Route path="Franchise" element={<Franchise/>}/>
            <Route path="/FullMenu" element={<FullMenu />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Routing