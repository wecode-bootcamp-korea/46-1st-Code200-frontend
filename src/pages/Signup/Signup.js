import React, { useEffect, useState } from 'react';
import { json, Link, useNavigate } from 'react-router-dom';
import AGREEMENT_LIST from './Agreement';
import INPUT_LIST from './inputList';
import CHECK_LIST from './checkList';
import './Signup.scss';
import GENDER_CHECK_LIST from './GenderCheckList';

function Signup() {
  const navigate = useNavigate();
  const [alertMsg, setAlertMsg] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [pop, setPop] = useState('nonPopup');
  const [vaildEmail, setVaildEmail] = useState('nonPopup');
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
    name: '',
    number: '',
    address: '',
    detail: '',
    gender: '',
    date: '',
    useage: '',
    terms: '',
  });

  const valueConditions = {
    email: inputValues.email.includes('@'),
    password: inputValues.password.length >= 5,
    name: inputValues.name.length >= 1,
    number: inputValues.number.length >= 11,
    address: inputValues.address.length >= 1,
    detail: inputValues.detail.length >= 1,
    date: inputValues.date.length >= 1,
  };

  const handleInput = event => {
    const { name, type, value } = event.target;
    if (type === 'checkbox' && inputValues[name]) {
      setInputValues({ ...inputValues, [name]: '' });

      return;
    }
    setInputValues({ ...inputValues, [name]: value });
  };

  // 이메일 중복확인
  const checkValidEmail = () => {
    fetch('http://10.58.52.62:7000/users/checkemail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: inputValues.email,
      }),
    })
      .then(res => res.json())

      .then(data => {
        setAlertMsg(
          data.theEmailExist == true
            ? '사용할 수 없는 이메일입니다.'
            : '사용가능한 이메일입니다.'
        );
        setVaildEmail('emailPopupWrap');
      });
  };

  //회원가입
  const handleSignUp = () => {
    const popType = isChecked ? 'nonPopup' : 'popupWrap';
    setPop(popType);

    fetch('http://10.58.52.62:7000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        name: inputValues.name,
        email: inputValues.email,
        phone_number: inputValues.number,
        birthday: inputValues.date,
        gender: inputValues.gender,
        address: inputValues.address,
        address_detail: inputValues.detail,
        password: inputValues.password,
        point: 30000,
        agreement_private: inputValues.useage ? 1 : 0,
        agreement_marketing: inputValues.marketing ? 1 : 0,
        agreement_terms: inputValues.terms ? 1 : 0,
      }),
    })
      .then(res => res.json())
      .then(data => navigate('/login'));
  };

  useEffect(() => {
    const isVaild =
      inputValues.email.includes('@') &&
      inputValues.password.length >= 5 &&
      inputValues.number.length >= 11 &&
      inputValues.name.length >= 1 &&
      inputValues.address.length >= 1 &&
      inputValues.detail.length >= 1 &&
      inputValues.useage &&
      inputValues.terms;

    setIsActive(isVaild);
  }, [inputValues]);

  const isChecked = inputValues.useage === 'on' && inputValues.terms === 'on';

  return (
    <div className="signup">
      <div className="wediya">
        <img className="logo" src="./images/logo.png" alt="wediya" />
      </div>
      <div className="signupTitle">
        <h2>회원가입</h2>
      </div>

      <div className="inputBoxWrap">
        {/* 이메일 중복체크 팝업 */}
        <div className={vaildEmail}>
          <div className="emailBox">
            <p>{alertMsg}</p>
            <button
              className="emailClose"
              onClick={() => setVaildEmail('nonPopup')}
            >
              닫기
            </button>
          </div>
          <label className="emailPopupBack" />
        </div>
        {/* input box wrap */}
        <div className="inputForm">
          {INPUT_LIST.map(inputList => (
            <div key={`input_${inputList.id}`}>
              <div className="textWrap">
                <p className="inputTitle">{inputList.title}</p>
                {!valueConditions[inputList.name] && (
                  <span className="vaild">{inputList.vaild}</span>
                )}
              </div>
              <div className="inputWrap">
                <input
                  className="inputBox"
                  key={inputList.id}
                  name={inputList.name}
                  type={inputList.type}
                  placeholder={inputList.placeholder}
                  onChange={handleInput}
                />
                {inputList.name == 'email' && (
                  <button className="overlap" onClick={checkValidEmail}>
                    중복확인
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* 약관동의 */}
          <div className={pop}>
            <div className="popupBox">
              <p>필수약관에 동의에 체크해주세요.</p>
              <button
                onClick={() => setPop('nonPopup')}
                className="close"
                htmlFor="popup"
              >
                닫기
              </button>
            </div>
            <label className="popupBack" htmlFor="popup" />
          </div>

          {/* 성별체크 */}
          <div className="gender">
            <span className="inputTitle">성별</span>
            <div className="inputBox">
              {GENDER_CHECK_LIST.map(gender => {
                return (
                  <p key={gender.id}>
                    <label className="check" htmlFor={gender.value}>
                      <input
                        id={gender.value}
                        type="checkbox"
                        value={gender.value}
                        name="gender"
                        onChange={handleInput}
                      />
                      <span className="icon" />
                      {gender.text}
                    </label>
                  </p>
                );
              })}
            </div>
          </div>

          {/* 추가정보 테이블 */}
          <div className="textWrap">
            <p className="inputTitle">추가정보</p>
          </div>
          <div className="route">
            <table>
              {CHECK_LIST.map(checkList => (
                <div key={`checkList_${checkList.id}`}>
                  <thead />
                  <tbody>
                    <tr>
                      <th className="tabletitle">{checkList.th}</th>
                      <div className="tdWrap">
                        <td>
                          <label className="check">
                            <input type="checkbox" />
                            <span className="icon" />
                          </label>
                          <span>{checkList.td1}</span>
                        </td>
                        <td>
                          <label className="check">
                            <input type="checkbox" />
                            <span className="icon" />
                          </label>
                          <span>{checkList.td2}</span>
                        </td>
                        <td>
                          <label className="check">
                            <input type="checkbox" />
                            <span className="icon" />
                          </label>
                          <span>{checkList.td3}</span>
                        </td>
                        <td>
                          <label className="check">
                            <input type="checkbox" />
                            <span className="icon" />
                          </label>
                          <span>{checkList.td4}</span>
                        </td>
                        <td>
                          <label className="check">
                            <input type="checkbox" />
                            <span className="icon" />
                          </label>
                          <span>{checkList.td5}</span>
                        </td>
                      </div>
                    </tr>
                  </tbody>
                </div>
              ))}
            </table>
          </div>

          {/* 약관동의 */}
          <div className="agreement">
            {AGREEMENT_LIST.map(list => (
              <div key={`agreement_${list.id}`}>
                <div className="itemFlex">
                  <h2 className="agreementTitle">
                    {list.title} <span>{list.span}</span>
                  </h2>
                  <p>
                    <label className="check">
                      <input
                        name={list.name}
                        onChange={handleInput}
                        type="checkbox"
                      />
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

          <button
            id="popup"
            onClick={handleSignUp}
            className={isActive ? 'able' : 'disabled'}
          >
            회원가입하기
          </button>

          <div className="goToLogin">
            <p>
              <span>아이디가 있으신가요?</span>
              <Link to="/login" className="loginBtn">
                로그인하기
              </Link>
            </p>
          </div>

          <div className={pop}>
            <div className="popupBox">
              <p>필수약관에 동의에 체크해주세요.</p>
              <button
                onClick={() => setPop('nonPopup')}
                className="close"
                htmlFor="popup"
              >
                닫기
              </button>
            </div>
            <label className="popupBack" htmlFor="popup" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
