import React from "react";
import './filteritem.css';


const Filteritem=({filter})=>
{
    return(
        <div className="filteritem">
            {filter.icon && filter.icon}
            <div className="filtername">{filter.title}</div>
        </div>
    )
}
export default Filteritem;