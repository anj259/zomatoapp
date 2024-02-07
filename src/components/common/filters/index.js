import React from "react";
import './filter.css'
import Filteritem from "./filteritem";

const Filter=({filterlist} )=>
{
    return(
        // <div>this is filter<Filteritem/></div>
        <div className="filters">
           {filterlist && filterlist.map((filter)=>{
                // return <div>{filter.title}</div>
                return <div><Filteritem filter={filter} key={filter.id}/></div>
           })} 

        </div>
    )
}

export default Filter;