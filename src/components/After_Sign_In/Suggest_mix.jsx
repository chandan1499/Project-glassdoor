import React from 'react'
import Suggest from './Suggest';
import styles from './After_sign_in_2.module.css'
const SuggestMix = () => {

    return(
        <>
        <div className={styles.suggestMix_div1}>
            <div>
                <h3>Suggested Jobs</h3>
                <p>Here are the open positions related to your current job title</p>
            </div>
            <div>
                <Suggest />
                <Suggest />
                <Suggest />
                <Suggest />
                <Suggest />
                <Suggest />
            </div>
        </div>
        </>
    );

};

export default SuggestMix;