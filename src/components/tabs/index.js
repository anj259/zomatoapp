import React from "react";

const Tabs=({tab,settab})=>
{
    return( 
        <div>
            <button onClick={()=>settab("Nightlife")}>click</button>
        </div>
    )
    
}

export default Tabs;