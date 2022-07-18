import React from "react";
import styled from './main_Content.css';
import styles from './main_content.css';
import footer from "./components/footer";
import MainCom01 from './img/mainimg';

// 내부에서 컴포넌트 생성

const Box = styled.div`
 display: none;
 width:100%;
 height:3000px;
 border:2px solid #000;
 background-color: blue;

`




function MainCom(){
    return(
        <div>
        <div className={styles.mainimg}>
            {/* {상단에 import Mainimg01 from "./img/mian.jpg"; 한 후에 사용} */}
            <img src={MainCom01}/>
            {/* {public폴더에 이미지 폴더를 설정하고 경로 설정} */}
            <img src={require(/img/mainimg.jpg)}/>
        </div>
        <div className={styles.contents}>
            <div className={styles.best}></div>
            <div className={styles.brand}></div>
            <div className={styles.coupon}></div>
             <div className={styles.event}></div>
        </div>
        {/* <div className="contents">

        </div> */}
        <Box>box</Box>
        </div>
    )
}

export default MainCom;