import React from 'react';
import Logo from "./image/logo.png";
import "./Menu.css";
import {AiOutlineHome} from "react-icons/ai";
import {MdOutlineExplore} from "react-icons/md";
import {MdOutlineSubscriptions} from "react-icons/md";
import {MdOutlineVideoLibrary} from "react-icons/md";
import {FaHistory} from "react-icons/fa";
import {MdLibraryMusic} from "react-icons/md";
import {MdOutlineSportsBaseball} from "react-icons/md";
import {SiYoutubegaming} from "react-icons/si";
import {MdOutlineLocalMovies} from "react-icons/md";
import {RiNewspaperLine} from "react-icons/ri";
import {MdLiveTv} from "react-icons/md";
import {FiSettings} from "react-icons/fi";
import {GoReport} from "react-icons/go";
import {FiHelpCircle} from "react-icons/fi";
import {MdOutlineLightMode} from "react-icons/md";
import Button from "./button/Button";


const Menu = () => {
  return (
    <div className='box-1'>
        <img src={Logo} alt="" />
        <span>YouTube</span>
        <div className='icon'>
            <div className="box-2"> <AiOutlineHome /><span>Home</span></div>
            <div className="box-2"><MdOutlineExplore /><span>Explore</span></div>
            <div className="box-2"><MdOutlineSubscriptions /><span>Subscription</span></div><hr 
            style={{
            }}
            />
            <div className="box-2"><MdOutlineVideoLibrary /><span>Library</span></div>
            <div className="box-2"><FaHistory/><span>History</span></div><hr />
            <div>Sign in to like videos,comment,and Subscribe</div>
            {/* <button>Sign In</button> */}
            <Button />
            <hr />
            <div className="box-2"><MdLibraryMusic /><span>Music</span></div>
            <div className="box-2"><MdOutlineSportsBaseball /><span>Sports</span></div>
            <div className="box-2"><SiYoutubegaming /><span>Gaming</span></div>
            <div className="box-2"><MdOutlineLocalMovies /><span>Movies</span></div>
            <div className="box-2"><RiNewspaperLine /><span>News</span></div>
            <div className="box-2"><MdLiveTv /><span>Live</span></div><hr />
            <div className="box-2"><FiSettings /><span>Settings</span></div>
            <div className="box-2"><GoReport /><span>Report</span></div>
            <div className="box-2"><FiHelpCircle /><span>Help</span></div>
            <div className="box-2"><MdOutlineLightMode /><span>Light Mode</span></div>
        </div>
    </div>
  )
}

export default Menu