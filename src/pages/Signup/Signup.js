import React, { useState } from 'react';
import './Signup.scss';
import AGREEMENT_LIST from './Agreemnet';
import INPUT_LIST from './inputList';

function Signup() {
  const [isVaild, setIsVaild] = useState(true);
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
    name: '',
    number: '',
    address: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const isActive = value => {
    if (
      setInputValues(value) === inputValues.email.value &&
      inputValues.email.includes('@')
    ) {
      return true;
    } else if (
      setInputValues(value) === inputValues.password.value &&
      inputValues.password.length >= 5
    ) {
      return true;
    }
  };

  return (
    <div className="signup">
      <div className="wediya">WEDIYA</div>
      <div className="signupTitle">
        <h2>회원가입</h2>
      </div>
      <div className="inputForm">
        {INPUT_LIST.map(inputList => (
          <>
            <input
              key={inputList.id}
              name={inputList.type}
              type={inputList.type}
              placeholder={inputList.placeholder}
              onChange={handleInput}
            />
            <p className={isActive ? 'invaild' : 'vaild'}>{inputList.vaild}</p>
          </>
        ))}

        <div className="route">
          <div>
            <p classname="signupTitle">가입 경로</p>
          </div>
          <div>
            <p>
              <label className="check">
                <input type="checkbox" />
                <span className="icon" />
              </label>
              <span>인터넷 검색</span>
            </p>
          </div>
          <div>
            <p>
              <label className="check">
                <input type="checkbox" />
                <span className="icon" />
              </label>
              <span>블로그</span>
            </p>
          </div>
          <div>
            <p>
              <label className="check">
                <input type="checkbox" />
                <span className="icon" />
              </label>
              <span>인스타그램</span>
            </p>
          </div>
          <div>
            <p>
              <label className="check">
                <input type="checkbox" />
                <span className="icon" />
              </label>
              <span>지인추천</span>
            </p>
          </div>
        </div>

        <div className="agreement">
          {AGREEMENT_LIST.map(list => (
            <div key={list.id}>
              <div className="itemFlex">
                <h2 className="agreementTitle">
                  {list.title} <span>{list.span}</span>
                </h2>
                <p>
                  <label className="check">
                    <input type="checkbox" />
                    <span className="icon" />
                  </label>
                </p>
              </div>
              <div className="agree">
                <div className="agreeScroll">{list.content}</div>
              </div>
            </div>
          ))}
        </div>

        <button className={isActive ? 'able' : 'disabled'} disabled={!isActive}>
          회원가입하기
        </button>
      </div>
    </div>
  );
}

export default Signup;
