import React from "react";
import './exploresection.css';
import Explorecard from "./explorecard";

const Exploresection=({list,collectionName})=>
{
    return (
        <div className="maxwidth explore_sction">
            <div className="collection_title">{collectionName}</div>
            <div className="explore_grid">{list.map((restaurant)=>
                {
                    return <Explorecard restaurant={restaurant} />
                })}
                </div>
        </div>
    )
}

export default Exploresection;