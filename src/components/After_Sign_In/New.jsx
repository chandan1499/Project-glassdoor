import React from "react";
import styles from './After_sign_in_2.module.css';

const SignIn3 = (props) => {
  return (
    <>
      <div className={styles.signInCard_div1}>
        <div>
          <img src={props.img} alt="imgs"/>
        </div>
        <div className={styles.signInCard_div2}>
          <h4>
         {props.h4}
          </h4>
          <p>
           {props.p}
          </p>
          <button>{props.btn}</button>
        </div>
        
      </div>
    </>
  );
};

export default SignIn3;
