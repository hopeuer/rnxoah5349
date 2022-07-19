import React from "react";
import styled from "styled-components";
import Footer from "./footer";

const Mainimg = styled.div`
width:100%; height:250px;
background-color:skyblue;
`;

const Contents = styled.div`
width:100%;
height: 2000px;
background-color:red;
`;

const Contentsin= styled.div`
margin: 0 auto;
width:100%;
height:2000px;
background-color:#000;
`

const Box = styled.div`
float= left; margin:20px;
width:600px;
height:200px;
background-color:#fff;
curcor:pointer,
transition: all 0.05s;
&:hover{
    
}

`

function Coupon(){
    return(
        <div>
            <Mainimg/>
            <Contents>
                <Contentsin>
                    <Box/><Box/><Box/><Box/>
                </Contentsin>
            </Contents>
            <Footer/>
        </div>
    )
}

export default Coupon;