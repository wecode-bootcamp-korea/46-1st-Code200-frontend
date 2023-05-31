import React from 'react';
import './Signup.scss';
import AGREEMENT_LIST from './Agreemnet';

function Signup() {
  return (
    <div className="signup">
      <div className="wediya">WEDIYA</div>
      <div className="signupTitle">
        <h2>회원가입</h2>
      </div>

      <div className="inputForm">
        <input type="email" placeholder="이메일" />

        <input type="passwords" placeholder="비밀번호" />

        <input type="text" placeholder="이름" />

        <input type="number" placeholder="전화번호" />

        <input type="text" placeholder="주소" />
        <div className="agreement">
          {AGREEMENT_LIST.map(list => (
            <>
              <div key={list.id} className="itemFlex">
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
            </>
          ))}
        </div>

        <button>회원가입하기</button>
      </div>
    </div>
  );
}

export default Signup;
