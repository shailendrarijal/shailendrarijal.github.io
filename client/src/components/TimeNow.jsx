import React from "react";

function TimeNow(){

    const hourNow = new Date().getHours();
    const minNow = new Date().getMinutes();

    const timeNow = hourNow + "" + ":" + ""+ minNow;
    
    return (
        <span>{timeNow}</span>

 );
}

export default TimeNow;