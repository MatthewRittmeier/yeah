import React from 'react'

function InfoSec(props) {
    let LeftSpacer
    if (props.left === "true")
    {
        LeftSpacer = "20%";
    }
    else
    {
        LeftSpacer = "50%";
    }
    return (
        <>
            <div className='InfoContainer'>
                <div style={{width: {LeftSpacer}, height: "20px"}}/>
                <div className='InfoContainer'>
                    <img src={props.img}/>
                    {props.text}
                </div>
            </div>
        </>
    )
}

export default InfoSec;