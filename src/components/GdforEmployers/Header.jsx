import styles from './Header.module.css';
import {Link} from 'react-router-dom';

export function Header(){

    
    return (
        <div className={styles.gdforEmp_header}>
            <div className={styles.gdforEmp_header_top}>
                <div >Resource Library <i className={styles.angle_down}></i></div>
                <div>Sign In</div>
                <div>Support</div>
                <div>Contact Sales</div>
                <div><i className={styles.angle_down}></i></div>
            </div>
            <div className={styles.gdforEmp_header_bottom}>
                <Link to="/Dashboard"><img src="https://www.glassdoor.co.in/employers/app/themes/theme-gd-employers/dist/images/gd-logo-eng.svg" alt="Glassdoor for Employers" title="Glassdoor for Employers" width="207" height="62"/></Link>
                <div className={styles.gdforEmp_header_bottom_right}>  
                    <div className={styles.gp}>Why Glassdoor? <i className={styles.angle_down}></i></div>
                    <div className={styles.gp}>Solutions <i className={styles.angle_down}></i></div>
                    <div className={styles.gp}>Sign Up</div>
                </div>
                <div><div className={styles.free_employer_account}>Free Employer Account <i className="fas fa-briefcase"></i></div></div>
                
                
            </div>
        </div>
    )
}