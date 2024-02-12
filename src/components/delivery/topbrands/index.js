import React from "react";
import './topbrands.css';
import Nextarrow from "../../common/commonarrows/nextarrow";
import Prevarrow from "../../common/commonarrows/previousarrow";

const brandlist=[
    {
        id:1,
        time:"30 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160258.png"
    },
    {
        id:2,
        time:"20 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188400.png"
    },
    {
        id:3,
        time:"35 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521806960.png"
    },
    {
        id:4,
        time:"32 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625165256.png"
    },
    {
        id:5,
        time:"25 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/cc073bc959de9ce28e24c6bc5ac91e13_1617972784.png"
    },
];

const settings = {
    // dots: true,
    //   infinite false means if loop is over it will strat from starting point
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Nextarrow />,
    prevArrow: <Prevarrow />
  };

const Topbrands=()=>
{
    return <div className="top_brand maxwidth">



    </div>
}
export default Topbrands;