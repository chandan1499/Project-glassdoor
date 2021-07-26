import styles from '../commonPartSalaryInterview.module.css';
import { Navbar } from '../navbar';
import { Footer } from '../footer';
import { CommonPartInSalaryAndInterview } from '../commonPartSalaryInterview'

export function DiscoverInterview() {
    return (
        <div>
            <Navbar />
            <CommonPartInSalaryAndInterview searchHeading={"Search Interview Questions"}
               infoHeading={"Interview Tips. Get a Leg Up."}
               infoDescription={"Read interview questions ahead of time so you can prep with confidence. Did you recently interview? Share what it was like."} 
               infoImage={"	https://media.glassdoor.com/home/value-prop/int/value-prop-carousel-desk-EN.png"}
               btnTag={"Share Your Experience"}
               navHeading1 = {"Discover Interviews"}
               navHeading2 = {"Add an Interview"}
               />
            <div className={styles.typeOfSalaries}>
                <ul>
                    <li className={styles.heading}>Difficult Interviews</li>
                    <li>Medical Representative Interviews</li>
                    <li>MIS Executive Interviews</li>
                    <li>Operations Interviews</li>
                    <li>Mechanical Design Engineer Interviews</li>
                    <li>Business Development Executive Interviews</li>
                    <li className={styles.extraLink}>More</li>
                </ul>
                <ul>
                    <li className={styles.heading}>Popular Interviews</li>
                    <li>Management Trainee Interviews</li>
                    <li>Deck Cadet Interviews</li>
                    <li>Technical Support Interviews</li>
                    <li>Food and Beverage Service Interviews</li>
                    <li>Process Associate Interviews</li>
                    <li className={styles.extraLink}>More</li>
                </ul>
                <ul>
                    <li className={styles.heading}>Interview Advice</li>
                    <li>Common Interview Questions</li>
                    <li>Toughest Interview Questions</li>
                    <li>Interview Advice</li>
                    <li>Interview Questions to Ask</li>
                    <li>Best Places to Interview</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}







