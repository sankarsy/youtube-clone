import React from 'react'
import './Sidebar.css'
import home from '../../image/home.png'
import { IoGameController } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaCarSide } from "react-icons/fa6";
import { IoMdBasketball } from "react-icons/io";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { MdLibraryMusic } from "react-icons/md";
import { MdOutlineCameraFront } from "react-icons/md";
import { LiaNewspaper } from "react-icons/lia";
import mrbeast from '../../image/mr.beast.jpeg'
import justin from '../../image/justinbieber.jpeg'
import craft from '../../image/craft.png'
import nasdaily from '../../image/nasdaily.jpeg'


function Sidebar({sidebar,category, setCategory}) {
    return (
        <div className={`sidebar ${sidebar? "":"small-sidebar"}`}>
            <div className="sorcut-link">
                <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                    {/* <img src={home} alt="NO " /> */}
                    <i><IoMdHome size={20} color='#797979'/></i><p>Home</p>
                </div>
                <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                    {/* <img src={game} alt="No " /><p>Gaming</p> */}
                    <i><IoGameController size={20} color='#797979'/> </i><p>Gaming</p>
                </div>
                <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                    {/* <img src={auto} alt="No " /><p>Automobiles</p> */}
                    <i><FaCarSide size={20} color='#797979'/></i><p>Automobiles</p>
                </div>
                <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                    {/* <img src={sports} alt="No " /><p>Sports</p> */}
                    <i><IoMdBasketball size={20} color='#797979'/></i><p>Sports</p>
                </div>
                <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                    {/* <img src={entertainment} alt="No " /><p>Entertainment</p> */}
                    <i><PiTelevisionSimpleBold size={20} color='#797979'/></i><p>Entertainment</p>
                </div>
                <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                    {/* <img src={technology} alt="No " /><p>Technology</p> */}
                    <i><GrTechnology size={20} color='#797979'/></i><p>Technology</p>
                </div>
                <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                    {/* <img src={music} alt="No " /><p>Music</p> */}
                    <i><MdLibraryMusic size={20} color='#797979'/></i><p>Music</p>
                </div>
                <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                    {/* <img src={blog} alt="No " /><p>Blogs</p> */}
                    <i><MdOutlineCameraFront size={20} color='#797979'/></i><p>Blogs</p>
                </div>
                <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                    {/* <img src={news} alt="No " /><p>News</p> */}
                    <i><LiaNewspaper size={20} color='#797979'/></i><p>News</p>
                </div>
                <hr />
            </div>
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src={mrbeast} alt="img" /><p>pewDiepie</p>
                </div>
                <div className="side-link">
                    <img src={mrbeast} alt="img" /><p>MrBeast</p>
                </div>
                <div className="side-link">
                    <img src={justin} alt="img" /><p>Justin bieber</p>
                </div>
                <div className="side-link">
                    <img src={craft} alt="img" /><p>5-minute crafts</p>
                </div>
                <div className="side-link">
                    <img src={nasdaily} alt="img" /><p>Nas Daily</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
