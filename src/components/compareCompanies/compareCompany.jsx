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

export function ShowCompareCompanies({location}) {
   // console.log(location);
    const company1 = location.state.first;
    const company2 = location.state.second;

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
                    <h2>{`Compare ${company1.name} vs ${company2.name}`}</h2>
                    <h4>{`See how working at ${company1.name} vs. ${company2.name} compares on a variety of workplace factors. By comparing employers on employee ratings, salaries, reviews, pros/cons, job openings and more, you'll feel one step ahead of the rest. All salaries and reviews are posted by employees working at ${company1.name} vs. ${company2.name}. Learn more about each company and apply to jobs near you.`}</h4>

                    <div>
                        <div className={styles.compareSection1}>
                            <div className={styles.compareType}>
                                <h3 className={styles.name}>Company Name</h3>
                            </div>
                            <div className={styles.compareType}>
                                <div className={styles.flex}>
                                    <img src={company1.logo} alt="" />
                                    <h3 className={styles.name}>{`${company1.name}`}</h3>
                                    <Link to="/CompareCompany"><button>Change</button></Link>
                                </div>
                            </div>
                            <div className={styles.compareType}>
                                <div className={styles.flex}>
                                    <img src={company2.logo} alt="" />
                                    <h3 className={styles.name}>{`${company2.name}`}</h3>
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
                                <h3>{company1.ceo}</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>{company2.ceo}</h3>
                            </div>


                            <div className={styles.compareType}>
                                <h3>Year Founded</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>{company1.foundedYear}</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>{company2.foundedYear}</h3>
                            </div>


                            <div className={styles.compareType}>
                                <h3>Overall Rating</h3>
                                <p>(full-time and part-time employees only)</p>
                            </div>
                            <div className={styles.compareType}>
                                <h3 className={styles.rating}>{company1.rating} <span>★</span></h3>
                                <p>(based on 17571 reviews)</p>
                            </div>
                            <div className={styles.compareType}>
                                <h3 className={styles.rating}>{company2.rating} <span>★</span></h3>
                                <p>(based on 18501 reviews)</p>
                            </div>


                            <div className={styles.compareType}>
                                <h3>Total Employees</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>{company1.totalEmployee}</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>{company2.totalEmployee}</h3>
                            </div>


                            <div className={styles.compareType}>
                                <h3>Company Type</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>{company1.companyType}</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>{company2.companyType}</h3>
                            </div>


                            <div className={styles.compareType}>
                                <h3>Salary-Range (Annual)</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>{company1.Salary}</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>{company2.Salary}</h3>
                            </div>


                            <div className={styles.compareType}>
                                <h3>Company Status</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>{company1.status}</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3>{company2.status}</h3>
                            </div>


                            <div className={styles.compareType}>
                                <h3>Website</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3 className={styles.websiteLink}>{company1.website}</h3>
                            </div>
                            <div className={styles.compareType}>
                                <h3 className={styles.websiteLink}>{company2.website}</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}