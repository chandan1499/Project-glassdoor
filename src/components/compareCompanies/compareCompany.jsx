import { Navbar } from '../navbar';
import { Footer } from '../footer';
import styled from "styled-components";
import styles from "./compareCompany.module.css";
import {Link} from "react-router-dom";


const CompanyNav = styled.nav`
    display: flex;
    border: 1px solid #c5c5c5;
    height: 60px;
    background-color: rgb(245,246,247);
    align-items: center;
    padding: 0 4%;
    font: 16px;
    color: grey;
    font-weight: 400;
    &>div{
        margin: 0 1%;
        cursor: pointer;
    }

`;

export function ShowCompareCompanies() {
    const company1 = "Google";
    const company2 = "Facebook";

    return (
        <div>
            <Navbar />
            <CompanyNav>
                <div>Discover Companies</div>
                <div>Compare Companies</div>
                <div>Suggested Follows</div>
                <div>Write a Review</div>
            </CompanyNav>
            <div className={styles.container}>
                <div className={styles.dataContainer}>
                    <h2>{`Compare ${company1} vs ${company2}`}</h2>
                    <h4>{`See how working at ${company1} vs. ${company2} compares on a variety of workplace factors. By comparing employers on employee ratings, salaries, reviews, pros/cons, job openings and more, you'll feel one step ahead of the rest. All salaries and reviews are posted by employees working at ${company1} vs. ${company2}. Learn more about each company and apply to jobs near you.`}</h4>

                    <div>
                        <div className={styles.compareSection1}>
                            <div className={styles.compareType}>
                                <h3 className={styles.name}>Company Name</h3>
                            </div>
                            <div className={styles.compareType}>
                                <div className={styles.flex}>
                                    <img src="https://media.glassdoor.com/sql/9079/google-squarelogo-1441130773284.png" alt="" />
                                    <h3 className={styles.name}>{`${company1}`}</h3>
                                    <Link to="/CompareCompany"><button>Change</button></Link>
                                </div>
                            </div>
                            <div className={styles.compareType}>
                                <div className={styles.flex}>
                                    <img src="https://media.glassdoor.com/sql/40772/facebook-squareLogo-1621582235975.png" alt="" />
                                    <h3 className={styles.name}>{`${company2}`}</h3>
                                    <Link to="/CompareCompany"><button>Change</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.compareSection}>
                            <div className={styles.compareType}>
                                <h3>CEO</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>Sundar Pichai</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>Mark Zuckerberg</h3>
                            </div>


                            <div className={styles.compareType}>
                                <h3>Year Founded</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>2005</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>2007</h3>
                            </div>


                            <div className={styles.compareType}>
                                <h3>Overall Rating</h3>
                                <p>(full-time and part-time employees only)</p>
                            </div>
                            <div className={styles.compareType}>
                                <h3 className={styles.rating}>4.5 <span>★</span></h3>
                                <p>(based on 17571 reviews)</p>
                            </div>
                            <div className={styles.compareType}>
                                <h3 className={styles.rating}>4.2 <span>★</span></h3>
                                <p>(based on 17571 reviews)</p>
                            </div>


                            <div className={styles.compareType}>
                                <h3>Total Employees</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>501 - 2000</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>501 - 1500</h3>
                            </div>


                            <div className={styles.compareType}>
                                <h3>Company Type</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>Private Sector</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>Private Sector</h3>
                            </div>


                            <div className={styles.compareType}>
                                <h3>Salary (Annual)</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>5L - 50L</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>3L - 50L</h3>
                            </div>


                            <div className={styles.compareType}>
                                <h3>Company Status</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>Operating</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>Operating</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}