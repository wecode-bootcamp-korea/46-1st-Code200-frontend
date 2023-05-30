import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Login/Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  const isValid = email.includes('@') && pw.length >= 5;

  // 1. input에서 onChange 이벤트로, 변경되는 이벤트를 감지해서 email, pw를 state에 저장한다
  // 2. 저장된 email, pw state가 조건을 만족하는지 확인한다
  // 3. 조건을 토대로 버튼 활성화/비활성화
  // 4. 그에 따른 분기처리

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePwChange = e => {
    setPw(e.target.value);
  };

  const goMain = () => {
    if (isValid) {
      navigate('/');
    } else {
      alert('틀린 비밀번호 입니다');
    }
  };

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      goMain();
    }
  };

  return (
    <>
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
    </>
  );
};

export default Login;
