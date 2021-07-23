import React from 'react'
import styles from "./After_sign_in_2.module.css";


const Recent = () => {

return(
    <>

        <div className={styles.recent_div1}>
            <div className={styles.recent_div1_1}>
                <span className={styles.recent_div1_1_span}>
                    <img src="https://media.glassdoor.com/sqls/2862211/noi-technologies-squareLogo-1626334103462.png" alt="bhj"/>
                </span>
            </div>
            <div className={styles.recent_div1_2}>5.0 <span></span></div>
            <div className={styles.recent_div1_3}>Jr. Software Engineer</div>
            <div className={styles.recent_div1_4}>
                <div>NOI Technologies</div>
                <div>Jaipur, Rajasthan</div>
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

    </>
);

};

export default Recent;