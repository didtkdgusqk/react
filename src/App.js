import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  let [맛집,맛집변경] = useState(['종로 고기 맛집', '강남 우동 맛집', '홍대 스시 맛집']); 
  let [a, b] = useState(0);

  function 글제목바꾸기() {
 맛집변경(['종로  집', '남 동 맛집', '홍 스시 집']);
  }

  function 글제목하나바꾸기() {
    var c = [...맛집];
     c[1] = '맛집 아닙니다';
     맛집변경(c);
     }
   

  return (
    <div className="App">
      <div className="black-nav">
       <div>개발 Blog</div>
      </div>
      <button onClick={글제목하나바꾸기}>눌러보세용</button>
      <div className='list'>
      <h3> { 맛집[1] } <span onClick={()=>{b(a + 1)}}>👍</span> {a} </h3>
      <p>2월 17일 발행</p>
      <hr/>
      </div>
      <div className='list'>
      <h3> { 맛집[0] }</h3>
      <p>2월 17일 발행</p>
      <hr/>
      </div>
      <div className='list'>
      <h3> { 맛집[2] }</h3>
      <p>2월 17일 발행</p>
      <hr/>
      </div>
      
    
    <Modal/>


    </div>

  );
}

function Modal() {
  return (
    <div className='modal'>
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
    
        </div>
  )
}
export default App;
