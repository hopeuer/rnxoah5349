import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
//import styled from 'styled-components';
//yarn add react-router-dom@5
//yarn add styled-components
//서브페이지 연결
import MainCom from './mainCom';
import Best from './components/best';
import Brand from './components/brand';
import Coupon from './components/coupon';
import Event from './components/event';

function App() {
  return (
   <div>
    {/* 상단부분 */}
    <div className='header'>
      <div className='header_in'>
        <div className='logo'>logo</div>
        <ul className='nav'>
          <li><Link to='/'>처음으로</Link></li>
          <li><Link to='/components/best'>BEST</Link></li>
          <li><Link to='/components/brand'>브랜드</Link></li>
          <li><Link to='/components/coupon'>쿠폰/혜택</Link></li>
          <li><Link to='/components/event'>이벤트</Link></li>
        </ul>
      </div>
    </div>

    {/* 본문내용 */}
    <div>
     <Route path ='/' exact={true}  component={MainCom} />
     <Route path ='/components/best' component={Best} />
     <Route path ='/components/brand' component={Brand} />
     <Route path ='/components/coupon' component={Coupon} />
     <Route path ='/components/event' component={Event} />
    </div>


   </div>
  );
}

export default App;
