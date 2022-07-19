import React from "react";
import styled from 'styled-components';

const ItemArea = styled.div`

`


function Item({user}){
    return (
        <div style={{width:'400px', float:'left'}}>
            <img src={user.src} alt={user.maintitle} width='50%'/>
            <h3>{user.maintitle}</h3>
            <p>{user.subtitle}</p>
            <p>{user.price}</p>
            <p>{user.review}</p>
            <div><span>사은품</span><span>기프트카드</span></div>
        </div>
    )    
}


function BestItems({}){
    const items = [    
        {
            id: 1,
            src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
            maintitle: '설화수1',
            subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
            price: '15000 만원',
            review:'★★★'
        },
        {
          id: 2,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수2',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 3,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수3',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 4,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수4',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 5,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수5',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 6,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수6',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 7,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수7',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 8,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수8',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 9,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수9',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 10,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수10',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 11,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수11',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 12,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수12',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        }
      
      ];  

    return(
        <div>
          {/* 
          <Item user={items[0]} />
          <Item user={items[1]} />
          <Item user={items[2]} />
          <Item user={items[3]} />
          <Item user={items[4]} />
          <Item user={items[5]} />
          <Item user={items[6]} />
          <Item user={items[7]} />
          <Item user={items[8]} /> 
          */}
          {items.map((user,index)=>(
             <Item user={user} key={index} />
          ))}
           
        </div>
    )
}

export default BestItems;
