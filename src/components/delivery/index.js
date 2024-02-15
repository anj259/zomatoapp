import React from "react";
import './delivery.css';
import Filter from "../common/filters";
import { BiSliderAlt } from "react-icons/bi";
import { LuArrowDownUp } from "react-icons/lu";
import Deliverycollections from "./deliverycollection";
import Topbrands from "./topbrands";
import Exploresection from "../common/exploresection";
import { restaurant } from "../../data/restaurant";

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

const restaurantlist=restaurant;

const Delivery=()=>
{
    return(
        // <div>this is Delivery!!</div>
        <div>
            <div className="maxwidth ">
                <Filter filterlist={deliveryfilter}/> 
            </div> 
            <Deliverycollections />
            <Topbrands />
            <Exploresection list={restaurantlist} collectionName="delivery reastaurants in surat"/>

        </div>
    );
}

export default Delivery;