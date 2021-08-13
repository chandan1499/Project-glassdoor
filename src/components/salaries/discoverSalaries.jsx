import styles from '../commonPartSalaryInterview.module.css';
import {CommonPartInSalaryAndInterview} from '../commonPartSalaryInterview'
import { Navbar } from '../navbar';
import { Footer } from '../footer';


export function DiscoverSalaries() {

    return (
        <div>
            <Navbar />
            <CommonPartInSalaryAndInterview searchHeading={"Search Salaries and Compensation"}
               infoHeading={"Search Salaries. Compare Pay."}
               infoDescription={"Search salaries and compensation at thousands of companies. Find out if you’re paid fairly. Share your salary anonymously to help others."} 
               infoImage={"https://media.glassdoor.com/home/value-prop/sal/value-prop-carousel-desk-GB.png"}
               btnTag={"Share Your Pay"}
               navHeading1 = {"Discover Salaries"}
               navHeading2 = {"Add a Salary"}
            />
            <div className={styles.typeOfSalaries}>
                <ul>
                    <li className={styles.heading}>Salary Advice</li>
                    <li>Salary Negotiation</li>
                    <li>Asking for a Raise</li>
                    <li>Top Paying Jobs</li>
                    <li>Top Paying Companies</li>
                    <li>Compare Your Salary</li>
                </ul>
                <ul>
                    <li className={styles.heading}>New Salaries</li>
                    <li>Recruitment Consultant Salaries</li>
                    <li>Program Manager Salaries</li>
                    <li>Private Banker Salaries</li>
                    <li>Actuary Salaries</li>
                    <li>Relationship Director Salaries</li>
                    <li className={styles.extraLink}>More</li>
                </ul>
                <ul>
                    <li className={styles.heading}>Highest Salaries</li>
                    <li>Director Salaries</li>
                    <li>Managing Director Salaries</li>
                    <li>Vice President Salaries</li>
                    <li>Trader Salaries</li>
                    <li>Sales Director Salaries</li>
                    <li className={styles.extraLink}>More</li>
                </ul>
                <ul>
                    <li className={styles.heading}>Popular Salaries</li>
                    <li>Mechanical Engineer Salaries</li>
                    <li>Assistant Professor Salaries</li>
                    <li>Data Scientist Salaries</li>
                    <li>Business Analyst Salaries</li>
                    <li>Investment Banking Analyst Salaries</li>
                    <li className={styles.extraLink}>More</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}









