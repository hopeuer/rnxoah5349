import React from "react";
import './com1.css';

//함수형 컴포넌트 선언

// function Com1_1({text, color}){
    function Com1_1({props}){
    return(
        <div className='com1' style={{color:props.color}}>
            Com1 {props.text}
        </div>
    )
}

export default Com1_1;

