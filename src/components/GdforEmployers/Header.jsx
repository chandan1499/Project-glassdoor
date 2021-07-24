import styles from './Header.module.css';
import {Link} from 'react-router-dom';

export function Header(){

    
    return (
        <div className={styles.gdforEmp_header}>
            <div className={styles.gdforEmp_header_top}>
                <a >Resource Library <i className={styles.angle_down} class="fas fa-angle-down"></i></a >
                <a >Sign In</a >
                <a >Support</a >
                <a >Contact Sales</a >
                <a><i className={styles.angle_down} class="fas fa-search"></i></a >
            </div>
            <div className={styles.gdforEmp_header_bottom}>
                <Link to="/Dashboard"><img src="https://www.glassdoor.co.in/employers/app/themes/theme-gd-employers/dist/images/gd-logo-eng.svg" alt="Glassdoor for Employers" title="Glassdoor for Employers" width="207" height="62"/></Link>
                <div className={styles.gdforEmp_header_bottom_right}>  
                    <a >Why Glassdoor? <i className={styles.angle_down} class="fas fa-angle-down"></i></a >
                    <a >Solutions <i className={styles.angle_down} class="fas fa-angle-down"></i></a >
                    <a >Sign Up</a >
                </div>
                <a href=""><div className={styles.free_employer_account}>Free Employer Account <i class="fas fa-briefcase"></i></div></a>
                
                
            </div>
        </div>
    )
}