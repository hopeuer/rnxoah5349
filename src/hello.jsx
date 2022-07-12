import React from "react";

// function(){}
// const 함수명 = () => {}

function Hello({name}){// 컴포넌트명 첫자가 반드시 대문자
  //const name = 'Hello';//props

  return(
   <div>
          <h2>{name}</h2>
   </div>
  )
}

export default Hello;