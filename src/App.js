import logo from './logo.svg';
import './App.css';

import {Link, Router} from 'react-router-dom';

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
    // 상단부분
    <div>
      <div className='header'>
      <div className='header_in'>
        <div className='logo'>logo</div>
        <div className='nav'></div>
        <ul>
          <li><link to = '/'>처음으로</link></li>
          <li><link to = '/components/best'>BEST</link></li>
          <li><link to = '/components/brand'>브랜드</link></li>
          <li><link to = '/components/coupon'>쿠폰/혜택</link></li>
          <li><link to = '/components/event'>이벤트</link></li>

        </ul>
      </div>
      </div>
      {/* {본문 내용} */}

      <div>
      <Router path='/' exact={true} component = {MainCom}/>
      <Router path='/components/best' component = {Best}/>
      <Router path='/components/brand' component = {Brand}/>
      <Router path='/components/coupon' component = {Coupon}/>
      <Router path='/components/event' component = {Event}/>

{P배열명.map((=>)))
<item user = {user} key={index}/>

    )
      </div>
    </div>
    </div>
  );
}

export default App;
