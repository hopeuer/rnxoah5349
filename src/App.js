import React from 'react'
import './App.css';
//라우터 관련 함수
import {Route,Link} from 'react-router-dom';
import Home from './home';
import About from './about';
import Profiles from './profiles';
import HistorySample from './historySample';


// hostname-> 127.0.0.1 서버주소 www.naver.com
// port -> 프로그램 넘버
// router -> 함수객체
// 컴포넌트 -> 함수
// SPA ->A태그 사용할 수 없음


function App() {
  return (
    <div>
      {/* {
        다른 주소로 이동시키기
        <Link to="주소">문자</Link>
      } */}
      <ul>
        <li><Link to="/home">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/profiles">프로필목록</Link></li>
        <li><Link to="/historySample">히스토리</Link></li>
      </ul>



      {/* {특정주소에 컴포넌트 연결하는 방법}
{ <Route path ="주소" component={보여줄 컴포넌트}></Route> } */}
      <div> 
       <Route path ="/home" exact={true} component={Home}></Route>
       <Route path ="/about" component={About}></Route>
       <Route path ="/profiles" component={Profiles}></Route>
       <Route path ="/historySample" component={HistorySample}></Route>
      </div>
    </div>
  );
}

export default App;
