import React from "react";
import styled from 'styled-components';

const Box = styled.div`
width:400px
`;


function Item({user}){
    return(
        <div className={styled.items}>
            <Box>
            <img></img>
            <img {styles.img} src={user.src}></img>
            <h4>{user.ttl}</h4>
            <p>{user/period}</p>
            </Box>
        </div>
    )
}

function BrandItems() {
    //선언형 함수
    //const 함수형 = () => {}

    // Item에 들어갈 내용을 배열로 선언
    const items = [
        {
            id:1,
            src:'https://images-kr.amoremall.com/fileupload/brand/31/2022/03/10/%EC%99%BC%EC%AA%BD_%EB%A9%94%EC%9D%B8%20750x660.jpg?shrink=387:341',
            ttl:'제목1',
            deriod:'2022-07-20 ~ 2022-07-20'
        },
        {
            id:2,
            src:'https://images-kr.amoremall.com/fileupload/brand/10/2022/04/15/1)%20%E9%87%89%EB%9A%AE%EC%98%96_%EC%92%93_%20%EF%A7%8E%EB%B6%BF%EC%94%A4%20_%EB%8C%80_%EF%A7%9E%C2%80.jpg?shrink=387:341',
            ttl:'제목2',
            deriod:'2022-07-20 ~ 2022-07-20'
        },
        {
            id:3,
            src:'https://images-kr.amoremall.com/fileupload/brand/15/2021/08/12/img_HERA.png?shrink=387:341',
            ttl:'제목3',
            deriod:'2022-07-20 ~ 2022-07-20'
        },
        {
            id:4,
            src:'https://images-kr.amoremall.com/fileupload/brand/18/2022/06/09/%EB%A9%94%EC%9D%B8-750x660.jpg?shrink=387:341',
            ttl:'제목4',
            deriod:'2022-07-20 ~ 2022-07-20'
        },
        {
            id:5,
            src:'https://images-kr.amoremall.com/fileupload/brand/25/2021/08/12/img_HANYUL.png?shrink=387:341',
            ttl:'제목5',
            deriod:'2022-07-20 ~ 2022-07-20'
        },
        {
            id:6,
            src:'https://images-kr.amoremall.com/fileupload/brand/17/2021/12/23/%EB%A0%88%ED%8B%B0%EB%86%80%20%EC%97%91%EC%8A%A4%ED%8D%BC%ED%8A%B8%20%EC%8B%9C%EB%A6%AC%EC%A6%88%20%EC%A1%B0%ED%95%A9%ED%95%A9%EC%84%B1%EC%BB%B7.jpg?shrink=387:341',
            ttl:'제목6',
            deriod:'2022-07-20 ~ 2022-07-20'
        },
    ]
    return(
        <div className={styles.items}>
        <Item user={items[0]}/>
        <Item user={items[1]}/>
        <Item user={items[2]}/>
        <Item user={items[3]}/>
        <Item user={items[4]}/>
        <Item user={items[5]}/>
        <Items.map{user.Box} key={index}/>
        </div>
    )
}

export default BrandItem;