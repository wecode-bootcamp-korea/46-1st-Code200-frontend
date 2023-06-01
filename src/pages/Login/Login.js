import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Login/Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  const isValid = email.includes('@') && pw.length >= 5;

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePwChange = e => {
    setPw(e.target.value);
  };

  const goMain = () => {
    fetch('http://10.58.52.134:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: 'code200@gmail.com',
        password: '!QWE123qwe',
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (isValid) {
          navigate('/');
        } else {
          alert('틀린 비밀번호 입니다');
        }
      });
  };

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      goMain();
    }
  };

  return (
    <div className="login">
      <p className="name">로그인</p>
      <div className="wrap">
        <p className="idcontent">이메일 아이디</p>
        <input
          type="text"
          className="id"
          placeholder="이메일을 입력해 주세요."
          value={email}
          onChange={handleEmailChange}
        />
        <p className="passwordcontent">비밀번호 </p>
        <input
          type="password"
          className="password"
          placeholder="비밀번호를 입력해 주세요."
          value={pw}
          onChange={handlePwChange}
          onKeyDown={handleOnKeyPress}
        />
        <button
          type="button"
          className="loginbutton"
          style={{ backgroundColor: isValid ? '#FFA500' : '#42A5F5' }}
          onClick={goMain}
        >
          로그인
        </button>
      </div>
      <div className="findid">
        <Link to="/">아이디/비밀번호 찾기</Link>
      </div>
      <div className="signup">
        <Link to="/">이메일로 회원가입</Link>
      </div>
    </div>
  );
};

export default Login;
