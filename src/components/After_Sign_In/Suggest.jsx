import React from "react";
import styles from "./After_sign_in_2.module.css";
import Sdata from "./After_sign_in_data";

// Sdata.map=(v)=>{
//     console.log(v[1])
// }

const Suggest = ( val ) => {
  // var i = 0;
  return (
    <>
      <div className={styles.suggest_div1}>
        <div className={styles.suggest_div2}>
          <svg
            className="SVGInline-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 90 90"
          >
            <g fill="none" fillRule="evenodd">
              <path stroke="#E7E7E7" d="M.5.5h89v89H.5z"></path>
              <g stroke="#999" strokeWidth="2">
                <path
                  strokeLinejoin="round"
                  d="M64.826 16.104H69v63H21v-63h4.174"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M34 57.104h22v22H34z"
                ></path>
                <path d="M45 57.104v22"></path>
                <g strokeLinecap="round" strokeLinejoin="round">
                  <path d="M28 28.104h8v8h-8zM41 28.104h8v8h-8zM54 28.104h8v8h-8zM28 42.104h8v8h-8zM41 42.104h8v8h-8zM54 42.104h8v8h-8z"></path>
                </g>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M26 10.104h38v12H26z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div className={styles.suggest_div3}>
          <div>
            <div>
              {Sdata[0].title}
            </div>
            <div>
              <svg
                className="SVGInline-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                   onClick={()=>{
                       
                   }} 
                  fill="none"
                  stroke="#0CAA41"
                  strokeWidth="2"
                  d="M1.026 7.175C.56 1.977 6.473-.73 10 3.939c3.527-4.72 9.44-2.016 8.974 3.236C18.404 13.752 10 18.5 10 18.5S1.597 13.752 1.026 7.175z"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <div>
              <span>{Sdata[0].company}</span>
              <span>{Sdata[0].location}</span>
            </div>
          </div>
          <div>
            <span>3 Days ago</span>
          </div>
        </div>
      </div>
      
    </>
    
  );
};


export default Suggest;
