import React from "react";
import styled from 'styled-components';
import styles from './mainCom.module.css';
import Footer from "./components/footer";
import Mainimg01 from "./images/main.jpg";
import Best from "./components/best";

//내부에서 컴포넌트 생성
const Box = styled.div`
  display:none;
  width:100%; 
  height:200px;
  background-color:red;
`

function MainCom(){
    return(
        <div>
            <div className={styles.mainimg}>
                {/* 상단에 import Mainimg01 from "./images/main.jpg"; 한 후에 사용*/}
                <img src={Mainimg01} />
                
                {/* public폴더에 이미지 폴더를 설정하고 경로 설정*/}
                <img src={require('./images/main.jpg')} />
            </div>
            <div className={styles.contents}>
                <div className={styles.best} 
                 style={{ height:'365px',overflow:'hidden', padding:'10px 0 '}}>
                  <Best/>
                </div>
                <div className={styles.brand}></div>
                <div className={styles.coupon}></div>
                <div className={styles.event}></div>
            </div>
            <Box>box</Box>

            <Footer/>
        </div>
    )
}

export default MainCom;