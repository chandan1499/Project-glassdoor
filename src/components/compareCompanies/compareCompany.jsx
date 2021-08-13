import { Navbar } from '../navbar';
import { Footer } from '../footer';
import styled from "styled-components";
import styles from "./compareCompany.module.css";
import {Link, useHistory} from "react-router-dom";

import SignIn3mix from '../After_Sign_In/New_mix';


//icons
// import { BiBuildings } from 'react-icons/bi';
// import { FaRegBuilding } from 'react-icons/fa';
// import { CgBriefcase } from 'react-icons/cg';
// import { IoIosArrowBack } from 'react-icons/io';
// import { IoIosArrowForward } from 'react-icons/io';
// import { IoInformationCircleOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
// import { FaRegSmileBeam } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
import { RiCustomerService2Line } from 'react-icons/ri';
import { FaBalanceScaleLeft } from 'react-icons/fa';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { FiPenTool } from 'react-icons/fi';
import { GrTools } from 'react-icons/gr';


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

const Cont3 = styled.div`
    background-color: white;
    padding: 1%;
    &>h2, &>p{
        margin-left: 15%;
    }
    &>div{
        display: flex;
        width: 80%;
        margin: auto;
    }
`



const Card2 = styled.div`
    display: flex;
    margin: 10px;
    
    img{
        border: 1px solid #e6e6e6;
        border-radius: 3px;
        width: 50px;
    }
    &>div{
        border: 1px solid #f5f5f5;
        width: 200px;
        height: 120px;
        padding: 1%;
        text-align: center;
        *{
            margin: 0;
        }
    }
`


const Card3 = styled.div`
    border: 1px solid #c7c7c7;
    font-weight: 500;
    width: 400px;
    height: 80px;
    margin: 5px;
    padding: 1%;
    &>div{
        border: 1px solid black;
        border-radius: 50%;
        width: 22px;
        height: 22px;
        padding: 1%;
    }
`;




export function ShowCompareCompanies({location}) {
   // console.log(location);
    const company1 = location.state.first;
    const company2 = location.state.second;

    const history = useHistory();
    const showDetail = (name, image) => {
        history.push({
            pathname: "/companyDetails",
            state: {
                name,
                image
            }
        })
    }

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
                                    <img src={company1.logo} alt="hg" />
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


            <Cont3>
                <h2>Compare Companies</h2>
                <p>See how companies stack up against their competitors using data only found on Glassdoor.</p>
                <div>
                    <Card2>
                        <div onClick={()=>{showDetail("Netflix", "https://media.glassdoor.com/sql/11891/netflix-squarelogo-1508988775050.png")}}>
                            <img src="https://media.glassdoor.com/sql/11891/netflix-squarelogo-1508988775050.png" alt="" />
                            <h3>Netflix</h3>
                            <p style={{ color: "rgb(12,170,65)" }}>4.6
                                <FaStar color="rgb(12,170,65)" fontSize="12px" />
                            </p>
                        </div>
                        <div onClick={()=>{showDetail("Google", "https://media.glassdoor.com/sql/9079/google-squarelogo-1441130773284.png")}}>
                            <img src="https://media.glassdoor.com/sql/9079/google-squarelogo-1441130773284.png" alt="" />
                            <h3>Google</h3>
                            <p style={{ color: "rgb(12,170,65)" }}>4.7
                                <FaStar color="rgb(12,170,65)" fontSize="12px" />
                            </p>
                        </div>
                    </Card2>
                    <Card2>
                        <div onClick={()=>{showDetail("Microsoft", "https://media.glassdoor.com/sqls/1651/microsoft-squarelogo-1479856042252.png")}}>
                            <img src="https://media.glassdoor.com/sqls/1651/microsoft-squarelogo-1479856042252.png" alt="" />
                            <h3>Microsoft</h3>
                            <p style={{ color: "rgb(12,170,65)" }}>4.4
                                <FaStar color="rgb(12,170,65)" fontSize="12px" />
                            </p>
                        </div>
                        <div onClick={()=>{showDetail("Amazon", "https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png")}}>
                            <img src="https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png" alt="" />
                            <h3>Amazon</h3>
                            <p style={{ color: "rgb(12,170,65)" }}>4.3
                                <FaStar color="rgb(12,170,65)" fontSize="12px" />
                            </p>
                        </div>
                    </Card2>
                </div>
                <h3 style={{ color: "rgb(24,97,191)", marginLeft: "40%" }}>Compare Companies <AiOutlineRight /> </h3>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h2>Explore Sectors</h2>
                    <div style={{ display: "flex" }}>
                        <Card3>
                            <div>

                                <RiCustomerService2Line fontSize="20px" />
                            </div>

                            <p>Customer Services</p>
                        </Card3>
                        <Card3>
                            <div>
                                <FaBalanceScaleLeft fontSize="20px" />
                            </div>

                            <p>Accounting & Legal</p>
                        </Card3>
                        <Card3>
                            <div>
                                <FaFileInvoiceDollar fontSize="20px" />
                            </div>
                            <p>Finance</p>
                        </Card3>
                        <Card3>
                            <div>
                                <FiPenTool fontSize="20px" />
                            </div>
                            <p>Arts, Entertainment &...</p>
                        </Card3>
                        <Card3>
                            <div>
                                <GrTools fontSize="20px" />
                            </div>
                            <p>Building, Repairs &...</p>
                        </Card3>
                    </div>
                </div>
            </Cont3>

            <SignIn3mix />
            <Footer />
        </div>
    );
}