import React from 'react'
import styles from "./After_sign_in_2.module.css";
import Rdata from './RecentData';

// import { useEffect } from 'react';
// var count =0;
const Recent = () => {

// Rdata.map((i)=>console.log("khb"))


return(
    <>
{Rdata.map((item)=> (
    
        <div className={styles.recent_div1} key={item.id}>
            <div className={styles.recent_div1_1}>
                <span className={styles.recent_div1_1_span}>
                    <img src={item.img} alt="bhj"/>
                </span>
            </div>
            <div className={styles.recent_div1_2}>{item.rating} <span></span></div>
            <div className={styles.recent_div1_3}>{item.position}</div>
            <div className={styles.recent_div1_4}>
                <div>{item.company}</div>
                <div>{item.location}</div>
            </div>
            <div className={styles.recent_div1_5}>
                <span>
                    <span>
                        <i>

                        </i>
                    </span>
                </span>
            </div>
        </div>
))};
    </>
);

};

export default Recent;