import React from 'react'
import "./Home.css";
import Menu from "../component/Menu";
import Main from "../component/Main";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <div className='home'>
     <div className='menu-bar'>
        <Menu />
      </div>
     <div className='body-part'>
      <Navbar />
      <Main />
     </div>
    </div>
  )
}

export default Home