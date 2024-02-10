import React from "react";
import './deliveryitem.css';

const Deliveryitems=({item})=>
{
    return <div>
        <div className="deli_item_cover">
            <img src={item.cover} className="deli_item_img" alt={item.title} />
        </div>
        <div className="deli_item_title">{item.title}</div>
    </div>
}

export default Deliveryitems;