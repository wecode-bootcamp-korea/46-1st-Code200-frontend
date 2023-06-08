import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const isValid =
    inputValues.email.includes('@') && inputValues.password.length >= 5;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      goMain();
    }
  };

  const goMain = () => {
    if (isValid) {
      fetch(`${process.env.REACT_APP_SERVER_HOST}/users/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(inputValues),
      })
        .then(res => res.json())
        .then(data => {
          if (data.message === 'USER_CORRECT') {
            localStorage.setItem('token', data.accessToken);
            navigate('/');
          } else {
            alert('잘못된 아이디나 비밀번호입니다');
          }
        });
    } else {
      alert('이메일과 비밀번호를 입력해주세요');
    }
  };

  return (
    <div className="login">
      <p className="name">로그인</p>
      <div className="wrap">
        <p className="idcontent">이메일 아이디</p>
        <input
          type="text"
          className="id input"
          name="email"
          placeholder="이메일을 입력해 주세요."
          value={inputValues.email}
          onChange={handleInput}
        />
        <p className="passwordcontent">비밀번호 </p>
        <input
          type="password"
          className="password input"
          name="password"
          placeholder="비밀번호를 입력해 주세요."
          value={inputValues.password}
          onChange={handleInput}
          onKeyDown={handleOnKeyPress}
        />
        <button type="button" className="loginbutton" onClick={goMain}>
          로그인
        </button>
      </div>
      <div className="findidd">
        <a href="##" className="findUserInfo">
          아이디/비밀번호 찾기
        </a>
      </div>
      <div className="signupp">
        <Link to="/signup" className="signupLink">
          이메일로 회원가입
        </Link>
      </div>
    </div>
  );
};

export default Login;
