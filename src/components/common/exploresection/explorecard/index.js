import React from "react";
import './explorecard.css';

const Explorecard=({restaurant})=>
{
    const name=restaurant?.info?.name ?? "";
    const coverimg=restaurant?.info?.image?.url;
    const deliverytime=restaurant?.order?.deliveryTime;
    const rating=restaurant?.info?.rating?.rating_text;
    const approxprice=restaurant?.info?.cfo?.text;
    const offers=restaurant?.bulkOffers ?? [];
    const cuisine=restaurant?.info?.cuisine?.map((item)=>item.name).slice(0,3);
    const bottomContainers=restaurant?.bottomContainers;
    const goldoff=restaurant?.gold?.text;
    const prooff=offers.length>1 ? offers[0].text : null;
    const discount=offers.length>1 ? offers[1].text : offers.length===1 ? offers[0].text : null;

    return (
        <div className="explorecard cursor_pointer">
            <div className="explorexard_cover">
                <img src={coverimg} className="explorecard_img"/>
            </div>
        </div>
    ) 
}

export default Explorecard;