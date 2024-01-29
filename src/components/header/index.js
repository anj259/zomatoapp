import React from "react";
import './header.css';
import { IoLocation } from "react-icons/io5";
import { FaCaretSquareDown } from "react-icons/fa";
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
                            <div>bangalore</div>
                        </div>
                        <div className="allcenter"><FaCaretSquareDown /></div>
                           
                    </div>
                </div>
            </div>
        
        </div>
    );
}

export default Header;

