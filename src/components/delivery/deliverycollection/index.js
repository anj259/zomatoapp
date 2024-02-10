import React from "react";
import './deliverycollection.css'
import Nextarrow from "../../common/commonarrows/nextarrow";
import Prevarrow from "../../common/commonarrows/previousarrow";
import Slider from "react-slick";
import Deliveryitems from "./deliveryitems";

const deliveryitems=
[
    {
        id:1,
        title:"Pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id:2,
        title:"Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id:3,
        title:"Fried Rice",
        cover:"https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png"
    },
    {
        id:4,
        title:"Cake",
        cover:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
    },
    {
        id:5,
        title:"Noodles",
        cover:"https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png"
    },
    {
        id:6,
        title:"Dosa",
        cover:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
    },
    {
        id:7,
        title:"Thali",
        cover:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
    },
    {
        id:8,
        title:"Paneer",
        cover:"https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png"
    }
]

const settings = {
    // dots: true,
    //   infinite false means if loop is over it will strat from starting point
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Nextarrow />,
    prevArrow: <Prevarrow />
  };
  
const Deliverycollections=()=>
{
    return(
    <div className="delivery_collection">
        <div className="maxwidth">
            <div className="collection_title">Eat What makes you Happy</div>
            <Slider {...settings}>
                {
                    deliveryitems.map((item)=>
                    {
                        return <Deliveryitems item={item}/>
                    })
                }
            </Slider>
        </div>
    </div>

    )
}

export default Deliverycollections;