import React from 'react'

function InfoSec(props) {
    if (props.left)
    {
        return (
            <>
                <div className='InfoBase'>
                    <img className='InfoImg' src={props.img}/>
                    <text className='InfoText'>{props.text}</text>
                </div>
            </>
        )
    }
    else
    {

    }
}

export default InfoSec;