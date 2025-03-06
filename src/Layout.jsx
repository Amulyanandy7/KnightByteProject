import React from 'react'
import {Link,Outlet}from "react-router-dom";
const Layout = () => {
  return (
        <nav>
           <ul 
  style={{
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    height: '70px',
    listStyleType: 'none',
    justifyContent: 'space-between',
    paddingRight: '90px',
    paddingLeft: '0', // Ensures no left padding
    margin: '0', // Ensures no margin at the top or sides
    position: 'fixed',
    top: '0',
    width: '98%', // Adjusted to ensure it spans the full viewport width
    zIndex: '1000', // Ensures it stays above other elements
  }}
>

                
               
                <p style={{fontSize:'23px',color:'white',fontWeight:'bold'}} >Knight Byte</p>
                <div style={{display:'flex'}}>
                <li style={{marginRight:'20px',paddingTop:'20px'}}> 
                    <Link to="/Home"  style={{color:'white',textDecoration:'none'}}>Home</Link>
                </li>
                < li style={{marginRight:'20px',paddingTop:'20px'}}>
                <Link to="/About" style={{color:'white',textDecoration:'none'}}>About</Link>
                </li>
                <li style={{paddingTop:'20px'}} >
                <Link to="/Menu"  style={{color:'white',textDecoration:'none',paddingRight:'20px'}}>Menu</Link>
                </li>
                <li style={{paddingTop:'20px'}} >
                <Link to="/Blog"  style={{color:'white',textDecoration:'none',paddingRight:'20px'}}>Blog</Link>
                </li>
                <li style={{paddingTop:'20px'}} >
                <Link to="/Franchise"  style={{color:'white',textDecoration:'none'}}>Franchise</Link>
                </li>
                </div>
            </ul>
            <Outlet/>
        </nav>
       
  );
}

export default Layout