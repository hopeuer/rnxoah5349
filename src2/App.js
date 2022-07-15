import logo from './logo.svg';
import './App.css';
import  Header from './component/header';
import  Main from './component/main'
import  Contents from './component/contents';
//내부에서 컴포넌트 선언하는 모율 연결
import  Footer from './component/footer';


//css Module
//리액트 프로젝트에서 컴포넌트를 스타일링 할 때
//CSS Module 기술을 사용하면 css 클래스가 중첩되는 것을 완벽히 방지할 수 있습니다.
//*css 파일 확장자를 .module.css로 해야함
//파일경로, 파일이름, 클래스이름, 해쉬값등 사용

function App() {
  return (
    <div>
     <Header/>
     <Main/>
     <Contents/>
     <Footer/>
    </div>
  );
}

export default App;
