import React from 'react'
import '../assets/css/emoji.css'
export function Emoji(props) {


    //const {symbol,title} = props
    return (
        <p className="emoji">
             {props.symbol} {props.title} 
        </p> 
    )
}