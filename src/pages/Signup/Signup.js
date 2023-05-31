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

  const isActive =
    inputValues.email.includes('@') && inputValues.password.length >= 5;

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
