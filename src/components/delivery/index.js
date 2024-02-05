import React from "react";
import './delivery.css';
import Filter from "../common/filters";
import { BiSliderAlt } from "react-icons/bi";
import { LuArrowDownUp } from "react-icons/lu";


const deliveryfilter=[
    {
        id:1,
        icon:<div className="allcenter"><BiSliderAlt /></div>,
        title:'Filter',
    },
    {
        id:2,
        title:'Rating: 4.0',
    },
    {
        id:3,
        title:'Safe and Hygienic',
    },
    {
        id:4,
        title:'Pure Veg',
    },
    {
        id:5,
        icon:<div className="allcenter"><LuArrowDownUp /></div>,
        title:'Delivery time',
    },
    {
        id:6,
        title:'Great Offers',
    }
    
]

const Delivery=()=>
{
    return(
        // <div>this is Delivery!!</div>
        <div>
            <div className="maxwidth ">
                <Filter filterlist={deliveryfilter}/> 
            </div> 
        </div>
    );
}

export default Delivery;