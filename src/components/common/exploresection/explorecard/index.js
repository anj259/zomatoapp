import React from "react";
import './explorecard.css';
import { LuStar } from "react-icons/lu";


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
                <div className="delivery_time">{deliverytime}</div>
                {prooff && <div className="prooff">{prooff}</div>}
                {goldoff && <div className="goldoff allcenter">{goldoff}</div>}
                {discount && <div className="discount allcenter">{discount}</div>}
            </div>
            <div className="rest_row">
                <div className="rest_name">{name}</div>
                {rating && (
                    <div className="rest_ratting allcenter">
                        {rating}
                        <div className="allcenter rating_icon"><LuStar /></div>
                    </div>)}
            </div>
            <div className="rest_row">
                {cuisine.length && (<div className="rest_cuisine">
                    {cuisine.map((item,i)=>
                    {
                        return (<span className="rest_cuisin_tag">{item} {i!==cuisine.length-1 && ","}</span>);
                    })}   
                </div>
                )}
                {approxprice && <div className="rest_price">{approxprice}</div>}   
            </div>
            {bottomContainers.length>0 && (<div>
                <div className="card_separator"></div>
                <div className="explore_bottom">
                    <img src={bottomContainers[0]?.image?.url} alt={bottomContainers[0]?.text} style={{height:"18px"}}/>
                    <div className="rest_bottom_text">{bottomContainers[0]?.text}</div>
                </div>
            </div>)}
        </div>
    );
};

export default Explorecard;