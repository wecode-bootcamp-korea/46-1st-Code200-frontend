import React from 'react';
import './Signup.scss';
import AGREEMENT_LIST from './Agreemnet';

function Signup() {
  return (
    <div className="signup">
      {AGREEMENT_LIST.map(list => (
        <>
          <div className="itemFlex">
            <h2 key={list.id} className="agreementTitle">
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
  );
}

export default Signup;
