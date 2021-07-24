import React from "react";
import Recent from "./Recent";
import styles from "./After_sign_in_2.module.css";

const RecentMix = () => {
  return (
    <>
      <div className={styles.recentTopDiv}>
        <div className={styles.recentMix_div1_1}>
          <h3>Recent Search</h3>
        </div>
        <div className={styles.recentMix_div1_2}>
          <div className={styles.recentMix_div1_2_1}>
            <div>
                <h3>full stack engineer In Jaipur, Rajasthan</h3>
            </div>
            <div className={styles.recentMix_div1_2_1_2}>
                <div className={styles.recentMix_div1_2_1_2_1}>
                    <p>Job alert</p>
                    <label className={styles.recentMix_div1_2_1_2_label}>
                        <input type="checkbox"/>
                        <span className={styles.recent_slider}/>
                        {/* <div></div> */}
                    </label>
                </div>
            </div>
          </div>
          <div className={styles.recentMix_div1}>
            <Recent />
            <Recent />
            <Recent />
            <Recent />
            <Recent />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentMix;
