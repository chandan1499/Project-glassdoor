import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
// import Dashboard from '../After_Sign_In/Dashboard'
export function Footer(){


    return(
        <>
        <div className={styles.footer}>
            <div className={styles.footer_inner_flex}>
                <div className={styles.footer_inner}>
                    
                    <h2>Why Glassdoor</h2>
                    <p>How it Works</p>
                    <p>The Glassdoor Difference</p>
                    <p>What is Employer Branding?</p>
                    <h2>Community and Partners</h2>
                    <p>OpenCompany</p>
                </div>
                <div className={styles.footer_inner}>
                    <h2>Solutions</h2>
                    <p>Employer Branding</p>
                    <p>Reviews</p>
                    <p>Insights</p>
                    <p>Features and Pricing</p>
                </div>
                <div className={styles.footer_inner}>
                    <h2>Support</h2>
                    <p>Technical Support</p>
                    <p>Glassdoor Basics</p>
                    <p>Employer Centre Basics</p>
                    <p>Manage Company Reviews</p>
                    <p>Manage Company Profile</p>
                </div>
                <div className={styles.footer_inner}>
                    <h2>Resource Library</h2>
                    <p>Hiring Recruting</p>
                    <p>Employee Onboarding</p>
                    <p>Employee Retention and Benefits</p>
                    <p>How to Use Glassdoor</p>
                    <p>HR Management and Planning</p>
                    <p>Employer Blog</p>
                </div>
                <div className={styles.footer_inner}>
                    <h2>Contact Us</h2>
                    {/* <a href="">help.glassdoor.com/Employer/</a> */}
                    <div>help.glassdoor.com/Employer/</div>
                    
                    <h2>Follow Us</h2>
                    <div>
                        <i className="fab fa-twitter-square"></i>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-instagram-square"></i>
                    </div>           
                </div>
            </div>
            <Link to="/Dashboard"><img src="https://www.glassdoor.co.in/employers/app/themes/theme-gd-employers/dist/images/icons/glassdoor-doors-icon.svg?x57299" alt="Glassdoor"></img><span> Looking for Glassdoor.com?</span></Link>

        </div>
        

        </>
    )
}