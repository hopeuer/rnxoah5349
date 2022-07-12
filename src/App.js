import React from 'react';
import './App.css';
import Com1 from
//컴포넌트를 불러오기 설정하고 return안에서 원하는 위치에 <Hello/> 입력

function App() {
  const styles = {
    backgroundColor: 'deepskyblue',
    color: 'white',
    fontSize: 40,
    padding: '1rem'
  } 
  
  const ttl = '리액트 시작10000000000'

  return (
    <div className='wrapper'>
      <h1 style={{color: 'red'}}>{ttl}</h1>
      <div style={box}>{ttl}</div>
      <Com1 text = {}
    </div>
  )

export default App;

  return (
  <> 
     {/* css를 내부로 적용하는 방법 객체(생성자)방식 */}
    <div style ={{backgroundColor:'red'}}><h1>header</h1></div>
    <div style ={styles}><h2>section</h2></div>
    {/* css를 적용하는 방법 : className 속성에 적용 */}
    <div className='Box'>
       <h2>box</h2>
    </div>
    <Hello name='hello' color='skyblue' isSpace={true} />
  </>   
  );
}

export default App;
