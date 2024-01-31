import React, { useState } from "react";
import Header from "../../components/header";
import Tabs from "../../components/tabs";
import Footer from "../../components/footer";
import Delivery from "../../components/delivery";
import Diningout from "../../components/diningout";
import Nightlife from "../../components/nightlife";

const Homepage=()=>
{

    const[activetab,settab]=useState("Delivery");

    return (
        <div>
            <Header/>
                      {/* props */}
            <Tabs tab={activetab} settab={settab} />
            {getScreen(activetab)}
            <Footer/>
        </div>
    )
}

const getScreen=(tabs)=>
{
    switch(tabs)
    {
        case "Delivery" : 
        return  <Delivery/>;
        case "Dining out" :
        return  <Diningout/>;
        case "Nightlife" :
        return  <Nightlife/>;
        default :
        return <Delivery/>;

    }
}

export default Homepage; 