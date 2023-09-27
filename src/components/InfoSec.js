import React from 'react'

function InfoSec(props) {
    return (
        <>
            <div className='InfoBase'>
                <text className='InfoTitle'>{props.title}</text>

                <div className='VerticalDisplacer'/>

                <img className='InfoImg' src={props.img}/>

                <div className='VerticalDisplacer'/>

                <text className='InfoText'>{props.text}</text>
            </div>
        </>
    )
}

export default InfoSec;