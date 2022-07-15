import React from "react";

const HistorySample = ({history}) => {
    const goBack = () => {
        history.goBack();//이젠 컴포넌트로 작동
    }
    const goHome = () => {//특정 컴포턴느로 ㅐㄻ]
        
        history.push('/');
    }



    return(
        <div>
            <h1>history</h1>
            <button onClick={goBack}>뒤로 가기</button>
            <button onClick={goHome}>홈으로 가기</button>
        </div>
    )
}

export default HistorySample;