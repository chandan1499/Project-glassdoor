import styles from './companyOverview.module.css';
import { Navbar } from '../navbar';
import { Footer } from '../footer'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


export function CompanyDetails({ location }) {
    const companyname = location.state.name;
    const image = location.state.image;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.companyProfile}>
                    <div>
                        <img src="https://media.glassdoor.com/banner/bh/9848/paypal-banner-1477525372879.jpg" alt="" />
                    </div>
                    <div className={styles.logo}>
                        <img src={image} alt="logo" />
                        <h1 className={styles.companyName}>{companyname}</h1>
                    </div>
                    <div className={styles.featuresContainer}>
                        <div className={styles.flex}>
                            <div className={styles.features}>
                                <i className="fas fa-bullseye"></i>
                                <p>Overview</p>
                            </div>
                            <div className={styles.features}>
                                <p>5.1k</p>
                                <p>Reviews</p>
                            </div>
                            <div className={styles.features}>
                                <p>2.4k</p>
                                <p>Jobs</p>
                            </div>
                            <div className={styles.features}>
                                <p>11k</p>
                                <p>Salaries</p>
                            </div>
                            <div className={styles.features}>
                                <p>1.3k</p>
                                <p>Interviews</p>
                            </div>
                            <div className={styles.features}>
                                <p>2.1k</p>
                                <p>Banefits</p>
                            </div>
                            <div className={styles.features}>
                                <p>98</p>
                                <p>Photos</p>
                            </div>
                        </div>
                        <div className={styles.flex}>
                            <button className={styles.featuresBtnFollow}>Follow</button>
                            <button className={styles.featuresBtnSalary}><i className="fas fa-plus"></i>Add a Salary</button>
                        </div>
                    </div>
                </div>
                <div className={styles.flex}>
                    <div className={styles.companyoverview}>
                        <h3>{companyname} Overview</h3>
                        <div className={styles.flex}>
                            <div>
                                <div className={styles.flex}>
                                    <p className={styles.typeHeading}>Website: </p>
                                    <Link><p>www.{companyname}.com</p></Link>
                                </div>
                                <div className={styles.flex}>
                                    <p className={styles.typeHeading}>Size: </p>
                                    <p>10000+ Employees</p>
                                </div>
                                <div className={styles.flex}>
                                    <p className={styles.typeHeading}>Type: </p>
                                    <p>Company - Public (PYPL)</p>
                                </div>
                                <div className={styles.flex}>
                                    <p className={styles.typeHeading}>Revenue: </p>
                                    <p>$10+ billion (USD)</p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.flex}>
                                    <p className={styles.typeHeading}>Headquarters: </p>
                                    <p>San Jose, CA</p>
                                </div>
                                <div className={styles.flex}>
                                    <p className={styles.typeHeading}>Founded: </p>
                                    <p>1998</p>
                                </div>
                                <div className={styles.flex}>
                                    <p className={styles.typeHeading}>Industry: </p>
                                    <p>Internet</p>
                                </div>
                            </div>
                        </div>

                        <p>At {companyname}, we believe that now is the time to democratize financial services so that moving and managing money is a right for all citizens, not just the affluent. We are driven by this purpose, and we uphold our cultural values of collaboration, innovation, wellness and inclusion as our guide for making decisions and conducting business every day. It is our duty and privilege to be customer champions and put those we serve at the center of everything we do.</p>
                        <p>We are one team that respects and values diversity of thought for everyone, everywhere, and we actively seek to create an energizing workplace that brings out the best in all of us. If you’re ready to shape the future of money, join the team at {companyname}. We're proud to work here. You will be too.</p>
                        <p><span>Mission:</span> At {companyname} (Nasdaq: PYPL), we put people at the center of everything we do. Founded in 1998, we continue to be at the forefront of the digital payments revolution, last year we processed 4 billion payments, of which 1 billion were made on mobile devices. {companyname} gives people better ways to connect to their money and to each other, helping them safely access and move their money and offering a choice of how they would like to pay or be paid.</p>
                    </div>
                    <div className={styles.rightExtraInfo}>
                        <h2>Jobs You May Like</h2>
                        <div className={styles.flex}>
                            <div className={styles.logoDiv}>
                                <img src="https://media.glassdoor.com/sqls/9848/paypal-squarelogo-1562008952564.png" alt="" />
                            </div>
                            <div className={styles.rightCompanyInfo}>
                                <p>Software Engineer 3</p>
                                <p>{companyname}, Inc. - Bangalore</p>
                                <p>₹3L - ₹10L</p>
                            </div>
                        </div>
                        <div className={styles.flex}>
                            <div className={styles.logoDiv}>
                                <img src="https://media.glassdoor.com/sqls/9848/paypal-squarelogo-1562008952564.png" alt="" />
                            </div>
                            <div className={styles.rightCompanyInfo}>
                                <p>MTS1, Software Engineer</p>
                                <p>{companyname}, Inc. - Bangalore</p>
                            </div>
                        </div>
                        <div className={styles.flex}>
                            <div className={styles.logoDiv}>
                                <img src="https://media.glassdoor.com/sqls/770542/izettle-squareLogo-1612887865954.png" alt="" />
                            </div>
                            <div className={styles.rightCompanyInfo}>
                                <p>Software Engineer 2</p>
                                <p>Zettle, Stockholm (Sweden)</p>
                            </div>
                        </div>
                        <div className={styles.flex}>
                            <div className={styles.logoDiv}>
                                <img src="https://media.glassdoor.com/sqls/261495/xoom-squarelogo-1540150291889.png" alt="" />
                            </div>
                            <div className={styles.rightCompanyInfo}>
                                <p>Software Engineer 3-Java,Growth Markets</p>
                                <p>Xoom, San Francisco, CA</p>
                                <p>₹3L - ₹10L</p>
                            </div>
                        </div>
                        <div className={styles.flex}>
                            <div className={styles.logoDiv}>
                                <img src="https://media.glassdoor.com/sqls/424728/braintree-squarelogo-1488318492634.png" alt="" />
                            </div>
                            <div className={styles.rightCompanyInfo}>
                                <p>MTS 2, Software Engineer</p>
                                <p>Braintree, Chicago, IL</p>
                                <p>₹2L - ₹10L</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}