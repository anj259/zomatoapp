import React from "react";
import './diningout.css';
import Collection from "../common/collection";
import { BiSliderAlt } from "react-icons/bi";
import { diningout } from "../../data/diningout";
import Filter from "../common/filters";
import Exploresection from "../common/exploresection";


const collectionlist=[
    // {
    //     id:1,
    //     title:"trending this weak",
    //     cover:"one",
    //     places:"10"
    
    // },
    // {
    //     id:2,
    //     title:"trending this weak",
    //     cover:"two",
    //     places:"10"
    // }
    {
        id:1,
        title:"trending this weak",
        cover:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
        places:"7 places"
    },
    {
        id:2,
        title:"Thali",
        cover:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
        places:"10 places"
    },
    {
        id:3,
        title:"Paneer",
        cover:"https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
        places:"8 places"
    },
    {
        id:4,
        title:"Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        places:"12 places"
    },
    {
        id:5,
        title:"Pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        places:"10 places"   
    },
    {
        id:6,
        title:"trending this weak ",
        cover:"https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
        places:"15 places"
    },
    {
        id:7,
        title:"Cake",
        cover:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
        places:"12 places"
    },
    {
        id:8,
        title:"Noodles",
        cover:"https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
        places:"10 places"
    }
    

];


const diningfilter=[
    {
        id:1,
        icon:<div className="allcenter"><BiSliderAlt /></div>,
        title:'Filter',
    },
    {
        id:2,
        title:'Gold',
    },
    {
        id:3,
        title:'Rating: 4.0',
    },
    {
        id:4,
        title:'outdoor seating',
    },
    {
        id:6,
        title:'Open now',
    }
    
];

const dininglist=diningout;
const Diningout=()=>
{
    return(
        <div>
            <Collection list={collectionlist}/>
            <div className="maxwidth">
                <Filter filterlist={diningfilter}/>
            </div>
            <Exploresection list={dininglist} collectionName="Trending dining restaurants in Mumbai"/>
        </div>
    )
}

export default Diningout;