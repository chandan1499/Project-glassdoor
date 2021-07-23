import React from 'react'
import StepsMix from './Steps_mix';
import SignIn3mix from './New_mix';
import SuggestMix from './Suggest_mix';
import RecentMix from './Recent_mix';
import styles from './After_sign_in_2.module.css'
import { Navbar } from '../navbar';
import { Footer } from '../footer';

const Dashboard = () => {

return (
    <>
    <div className={styles.nav_div}>
    <Navbar />
    </div>
    <div>
    <div className={styles.after_sign_in_upper_whole}>
    <div className={styles.after_sign_in_heading}>
        <h2>Your Glassdoor Dashboard</h2>
    </div>
    <div className={styles.after_sign_in_upper}>
        <div>
            <StepsMix />
        </div>
        <div>
            <RecentMix />
            <SuggestMix />
        </div>
    </div>
    </div>
    <SignIn3mix />
    </div>
    <Footer />
    </>
);

};


export default Dashboard;