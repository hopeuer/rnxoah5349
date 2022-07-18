import React from "react";
import styled from "styled-components";
import Bestitem from "./bestitems";
import Footer from "./footer";
import Bestitems from "./bestitems";

const Contents = styled.div`
`width: 100%;`

 `;
const BestBlack = styled.div`
margin: 0 Auto;
width: 1500px;
padding:50px 0;
background-color:#ccc;`

function Best(){
    return(
        <div>
            <Contents>
                <bestBlock>
                    <Bestitems/>
                </bestBlock>
            </Contents>
        <Footer/>
        </div>
        
    )
}

export default Best;