import React from "react";
import styled from 'styled-components';
import Footer from "./footer";
import BestItems from "./bestItem";

const Contents= styled.div`
  width: 100%;
`;

const BestBlock = styled.div`
 margin:0 auto;
 width: 1600px;
 height: 1600px;
 padding:50px 0;
 background-color:#ccc;
`

function Best(){
    return(
        <> 
            <Contents>
                <BestBlock>
                   <BestItems/>
                </BestBlock>
            </Contents>
            <Footer/>
        </>   
    )
}

export default Best;