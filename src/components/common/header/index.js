import React from "react";
import './header.css';
import { IoLocation } from "react-icons/io5";
import { FaCaretSquareDown } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";


// import '../../style/commonclasses.css';

const Header=()=>
{
    return(
        <div className="maxwidth header">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomatoclonelogo" className="header-logo"/>
            <div className="header_right">
                <div className="header_location_search_container">
                    <div className="loction_wrapper">
                        <div className="location_icon_name">
                            <div className="allcenter location_icon"><IoLocation/></div>
                            <div>Bangalore</div>
                        </div>
                        <div className="allcenter"><FaCaretSquareDown /></div>
                    </div>
                    <div className="location_search_separator"></div>
                    <div className="header_search_bar">
                        <div className="allcenter search_icon" ><BiSearchAlt /></div>
                        <input type="text"  placeholder="Search for a dish " className="search_box" />
                    </div>
                </div>
                <div className="profile_wrapper">
                    <img src="https://www.drawhipo.com/wp-content/uploads/2022/07/Fast-Food-Color-3-Pizza-Curved.png" alt="profile" className="header_profile_img"/>
                    <div className="header_username">Anjali</div>
                    <div className="allcenter profile_option_icon"><FaAngleDown /></div>
                </div>
            </div>
        </div>
    );
}

export default Header;

