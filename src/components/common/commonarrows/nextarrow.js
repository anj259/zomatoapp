import React from "react";

const Nextarrow=(props)=>
{
    const { className, style, onClick } = props;
    return (
        <div className={className}
        style={{ ...style, }}
        onClick={onClick}>
        </div>

    )
}
export default Nextarrow;