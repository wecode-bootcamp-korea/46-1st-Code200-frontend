import React from 'react';

function Order() {
  return <div>Order</div>;
}

export default Order;

// const [isOpenLogin , setIsisOpenLogin] = usestatr(true)

// <LoginModal title = {isOpenLogin ? '로그인' : 회원가입}
// Link to= {}></LoginModal>

// modal에서 props로 받아서
// <onclick={()=>{setIsisOpenLogin((prev)=> !prev)}}>

// <h2>{title}</h2>
// {title === '회원가입'&& (
// <input placeholder='이름'/>
// )}

// >>>>상수데이터화 시켜서 props
// 각자 필요한 데이터를 상수데이터로 만들고

// const LOGIN_INFO = {
//   title : "로그인",
//   link : '아직 회원 아닌가요 회원가입'
// };

// const SIGNUP_INFO = {
//   title : "회원가입",
//   link : '이미 회원이신가요 로그인'
// };

// <LoginModal info = {isOpenLogin ? 'LOGIN_INFO' : SIGNUP_INFO}

// modal에서
// const modal = ({info, setIsisOpenLogin}) =>
// const  { title,link } = info;

// >>>실제 사용 방법
