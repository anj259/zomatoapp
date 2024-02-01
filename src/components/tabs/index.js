import React from "react";
import './tabs.css';

const tabs=[
    {
        id:1,
        name:"Delivery",
        active_img:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
        backdrop:"#FCEEC0",
        inactiveimg:"https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
    },
    {
        id:1,
        name:"Dining out",
        active_img:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
        backdrop:"#a8b0e6",
        inactiveimg:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
    },
    {
        id:1,
        name:"Nightlife",
        active_img:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
        backdrop:"#eaabb3",
        inactiveimg:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
    }
];


const Tabs=({activetab,settab})=>
{
    

    return( 
        <div className="taboptions">
            {/* <button onClick={()=>settab("Nightlife")}>click</button> */}
            <div className="maxwidth tabs-wrapper">
                {tabs.map((tab)=>
                {   
                    // console.log(tab.backdrop);
                    // return <div>{tab.name}</div> 
                    return (
                        <div onClick={()=>settab(tab.name)} className={`tab_item allcenter cursor_pointer ${activetab===tab.name && "active_tab"}`}>
                            <div className="tab_img_container allcenter" style={{backgroundColor:`${activetab===tab.name ? tab.backdrop : ""}`,}}>
                                <img className="tab_img" alt={tab.name} src={activetab===tab.name ? tab.active_img : tab.inactiveimg} />
                            </div>
                            <div className="tab_name">{tab.name}</div>
                        </div> 
                    );
                })}
            </div>
        </div>
    );
    
};
export default Tabs;