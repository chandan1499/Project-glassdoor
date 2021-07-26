import styled from "styled-components";
import { BiBuildings } from 'react-icons/bi';
import { FaRegBuilding } from 'react-icons/fa';
import { CgBriefcase } from 'react-icons/cg';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { FaRegSmileBeam } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
import { RiCustomerService2Line } from 'react-icons/ri';
import { FaBalanceScaleLeft } from 'react-icons/fa';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { FiPenTool } from 'react-icons/fi';
import { GrTools } from 'react-icons/gr';
import { Navbar } from "../navbar";
import { Footer } from '../footer';
import { Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react';



const Cont1 = styled.div`
    display: flex;
    background-color: white;
    justify-content: center;
    /* align-items: center; */

    &>div:nth-of-type(1){
        margin: 1%;
        display: flex;
        flex-direction: column;
        /* align-items: flex-start; */
        width: 400px;
        &>div:nth-of-type(1){
            border: 1px solid #d1d1d1;
            border-radius: 5px;
            color: gray;
            text-align: left;
            padding: 5%;
            h3{
                color: rgb(24,97,191);
            };

            &>div:nth-of-type(1){
                display: flex;
                align-items: center;
            };
            &>div:nth-of-type(2){
        
                border-top: 1px solid #d1d1d1;
            }
        }

        &>div:nth-of-type(2){
            height: 200px;
            margin-top: 20px;
            /* width: 100%; */
            &>div:nth-of-type(1){
                display: flex;
                justify-content: space-between;
            };
            &>div:nth-of-type(2){
                display: flex;
                button{
                    border:none;
                    height: 35px;
                    width: 80px;
                    border-radius: 17.5px;
                    margin: 0 5px;
                    font-size: 17px;
                    color: gray;
                }
            };
            h3{
                color: gray;
            };
            border: 1px solid #d1d1d1;
            border-radius: 5px;
            color: gray;
            text-align: left;
            padding: 5%;
        }
    
    };
    &>div:nth-of-type(2){
        text-align: center;
    }
    &>div:nth-of-type(2)>div{

        width: 900px;
        margin: 1%;
        display: grid;
        grid-template-columns: 45% 45%;
        justify-content: space-around;
    }
`;
const CompanyCard = styled.div`
    width: 400px;
    border: 1px solid #d1d1d1;
    border-radius: 5px;
    color: gray;
    text-align: left;
    padding: 2%;
    height: 230px;
    margin:10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h3, p{
        margin: 5px;
    }
    img{
        width: 50px;
        border: 1px solid #d1d1d1;
        border-radius: 5px;
    }
    button{
        background-color: white;
        height: 30px;
        width: 100px;
        font-weight: 600;
        font-size: 17px;
        border: 1px solid #b6b6b6;
        border-radius: 3px;
    }
    &>div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    };
    &>div:nth-of-type(2){
        border-top: 1px solid #d1d1d1;
        justify-content: flex-start;
        display: flex;
        /* padding-top: 1%; */
        height: 20%;
        * {
            margin: 1%;
        }
    }
`;

const Cont2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    &>div{
        display: flex;
    }
`
const Card1 = styled.div`
    margin: 10px;
    border: 1px solid #d1d1d1;
    border-radius: 5px;
    background-color: white;
    width: 370px;
    height: 250px;
    padding: 1% 1.5%;
    img{
        width: 50px;
        border: 1px solid #d1d1d1;
        border-radius: 3px;
        margin: 0 10px;
    }
    
    &>div:nth-child(1){
        border-bottom: 1px solid #d1d1d1;
        display: flex;
        height: 80px;
        align-items: center;
        /* justify-content: space-around; */
        h3, p{
            margin: 0;
        }

    }
    &>div:nth-child(2){
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`
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

    a {
        margin: 0px 10px;
    }
`;


export function DiscoverCompanies() {
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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <Navbar />
            <CompanyNav>
                <Link to="/companies"><div>Discover Companies</div></Link>
                <Link to="/CompareCompany"> <div>Compare Companies</div></Link>
                <div>Suggested Follows</div>
                <Link to="/reviewForm"><div>Write a Review</div></Link>
            </CompanyNav>
            <Cont1>
                <div>
                    <h2>Your Company Preferences</h2>
                    <div>
                        <BiBuildings fontSize="25px" />

                        <p>Preferred Industries</p>
                        <h3>Add Preffered Industries</h3>
                        <p>Preferred Company Size</p>
                        <h3>Add Preferred Company Size</h3>
                        <p>Companies You Follow</p>
                        <div>
                            <FaRegBuilding fontSize="25px" /> <h3>Google</h3>
                        </div>
                        <div>
                            <h3>Edit Company Preferences</h3>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <CgBriefcase color="rgb(102,192,128)" fontSize="25px" />

                            </div>
                            <div>
                                <IoIosArrowBack color="rgb(184,187,191)" fontSize="25px" />
                                <IoIosArrowForward color="rgb(80,88,99)" fontSize="25px" />

                            </div>
                        </div>
                        <p>Get personalised recommendations</p>
                        <h3>Are you open to relocation?</h3>
                        <div>
                            <button>Yes</button>
                            <button>No</button>
                        </div>
                        <p>Viewable by Employers
                            <IoInformationCircleOutline />

                        </p>
                    </div>


                </div>
                <div>
                    <h2>Companies Recommended for You</h2>
                    <p>Recommendations are based on your profile, job preferences, and activity on Glassdoor.</p>
                    <div>
                        <CompanyCard onClick={() => { showDetail("Microsoft", "https://media.glassdoor.com/sqls/1651/microsoft-squarelogo-1479856042252.png") }}>
                            <img src="https://media.glassdoor.com/sqls/1651/microsoft-squarelogo-1479856042252.png" alt="" />
                            <div>
                                <div>
                                    <h3>Microsoft</h3>
                                    <p style={{ color: "rgb(12,170,65)" }}>4.4
                                        <FaStar color="rgb(12,170,65)" fontSize="12px" />
                                    </p>
                                </div>
                                <div>
                                    <button>Follow</button>
                                </div>
                            </div>
                            <p>100 Jobs . 2300 Reviews . 2200 Salaries</p>
                            <div>
                                <FaRegSmileBeam fontSize="20px" /> <p> Highly Rated for culture and values</p>
                            </div>
                        </CompanyCard>

                        <CompanyCard onClick={() => { showDetail("Google", "https://media.glassdoor.com/sql/9079/google-squarelogo-1441130773284.png") }}>
                            <img src="https://media.glassdoor.com/sql/9079/google-squarelogo-1441130773284.png" alt="" />
                            <div>
                                <div>
                                    <h3>Google</h3>
                                    <p style={{ color: "rgb(12,170,65)" }}>4.7
                                        <FaStar color="rgb(12,170,65)" fontSize="12px" />
                                    </p>
                                </div>
                                <div>
                                    <button>Follow</button>
                                </div>
                            </div>
                            <p>100 Jobs . 2300 Reviews . 2200 Salaries</p>
                            <div>
                                <FaRegSmileBeam fontSize="20px" /> <p> Highly Rated for culture and values</p>
                            </div>
                        </CompanyCard>
                        <CompanyCard onClick={() => { showDetail("Netflix", "https://media.glassdoor.com/sql/11891/netflix-squarelogo-1508988775050.png") }}>
                            <img src="https://media.glassdoor.com/sql/11891/netflix-squarelogo-1508988775050.png" alt="" />
                            <div>
                                <div>
                                    <h3>Netflix</h3>
                                    <p style={{ color: "rgb(12,170,65)" }}>4.6
                                        <FaStar color="rgb(12,170,65)" fontSize="12px" />
                                    </p>
                                </div>
                                <div>
                                    <button>Follow</button>
                                </div>
                            </div>
                            <p>100 Jobs . 2300 Reviews . 2200 Salaries</p>
                            <div>
                                <FaRegSmileBeam fontSize="20px" /> <p> Highly Rated for culture and values</p>
                            </div>
                        </CompanyCard>
                        <CompanyCard>
                            <h3>Not finding the right company?</h3>
                            <p>Use Glassdoor's Company Explorer to filter Companies by sector, ratings and more.</p>
                            <button style={{ border: "2px solid rgb(24,97,191)", color: "rgb(24,97,191)", width: "170px", height: "35px" }}>Search Companies</button>
                        </CompanyCard>
                    </div>

                </div>
            </Cont1>

            <Cont2>

                <h2>Latest Reviews for Recommended Companies</h2>
                <div>
                    <Card1 onClick={() => { showDetail("Google", "https://media.glassdoor.com/sql/9079/google-squarelogo-1441130773284.png") }}>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/9079/google-squarelogo-1441130773284.png" alt="" />
                            </div>
                            <div>
                                <h3>Google</h3>
                                <p style={{ color: "rgb(12,170,65)" }}>4.7
                                    <FaStar color="rgb(12,170,65)" fontSize="12px" />
                                </p>
                            </div>
                        </div>
                        <div>
                            <p>Current Employee Software Engineer</p>
                            <div>
                                <FaStar color="rgb(12,170,65)" fontSize="15px" /><FaStar color="rgb(12,170,65)" fontSize="15px" /><FaStar color="rgb(12,170,65)" fontSize="15px" /><FaStar color="rgb(12,170,65)" fontSize="15px" /><FaStar color="rgb(12,170,65)" fontSize="15px" />
                            </div>
                            <p>"Best company and best work culture ever"</p>
                            <p>July 3,2021</p>
                        </div>
                    </Card1>
                    <Card1 onClick={() => { showDetail("Amazon", "https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png") }}>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png" alt="" />
                            </div>
                            <div>
                                <h3>Amazon</h3>
                                <p style={{ color: "rgb(12,170,65)" }}>4.3
                                    <FaStar color="rgb(12,170,65)" fontSize="12px" />
                                </p>
                            </div>
                        </div>
                        <div>
                            <p>Current Employee Software Engineer</p>
                            <div>
                                <FaStar color="rgb(12,170,65)" fontSize="15px" /><FaStar color="rgb(12,170,65)" fontSize="15px" /><FaStar color="rgb(12,170,65)" fontSize="15px" /><FaStar color="rgb(12,170,65)" fontSize="15px" /><FaStar color="rgb(12,170,65)" fontSize="15px" />
                            </div>
                            <p>"Best company and best work culture ever"</p>
                            <p>July 3,2021</p>
                        </div>
                    </Card1>
                    <Card1 onClick={() => { showDetail("Ericsson-Worldwide", "https://media.glassdoor.com/sql/3472/ericsson-worldwide-squarelogo-1522695466023.png") }}>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/3472/ericsson-worldwide-squarelogo-1522695466023.png" alt="" />
                            </div>
                            <div>
                                <h3>Ericsson-Worldwide</h3>
                                <p style={{ color: "rgb(12,170,65)" }}>4.1
                                    <FaStar color="rgb(12,170,65)" fontSize="12px" />
                                </p>
                            </div>
                        </div>
                        <div>
                            <p>Current Employee Software Engineer</p>
                            <div>
                                <FaStar color="rgb(12,170,65)" fontSize="15px" /><FaStar color="rgb(12,170,65)" fontSize="15px" /><FaStar color="rgb(12,170,65)" fontSize="15px" /><FaStar color="rgb(12,170,65)" fontSize="15px" /><FaStar color="rgb(12,170,65)" fontSize="15px" />
                            </div>
                            <p>"Best company and best work culture ever"</p>
                            <p>July 3,2021</p>
                        </div>
                    </Card1>
                </div>
            </Cont2>

            <Cont3>
                <h2>Compare Companies</h2>
                <p>See how companies stack up against their competitors using data only found on Glassdoor.</p>
                <div>
                    <Card2>
                        <div onClick={() => { showDetail("Netflix", "https://media.glassdoor.com/sql/11891/netflix-squarelogo-1508988775050.png") }}>
                            <img src="https://media.glassdoor.com/sql/11891/netflix-squarelogo-1508988775050.png" alt="" />
                            <h3>Netflix</h3>
                            <p style={{ color: "rgb(12,170,65)" }}>4.6
                                <FaStar color="rgb(12,170,65)" fontSize="12px" />
                            </p>
                        </div>
                        <div onClick={() => { showDetail("Google", "https://media.glassdoor.com/sql/9079/google-squarelogo-1441130773284.png") }}>
                            <img src="https://media.glassdoor.com/sql/9079/google-squarelogo-1441130773284.png" alt="" />
                            <h3>Google</h3>
                            <p style={{ color: "rgb(12,170,65)" }}>4.7
                                <FaStar color="rgb(12,170,65)" fontSize="12px" />
                            </p>
                        </div>
                    </Card2>
                    <Card2>
                        <div onClick={() => { showDetail("Microsoft", "https://media.glassdoor.com/sqls/1651/microsoft-squarelogo-1479856042252.png") }}>
                            <img src="https://media.glassdoor.com/sqls/1651/microsoft-squarelogo-1479856042252.png" alt="" />
                            <h3>Microsoft</h3>
                            <p style={{ color: "rgb(12,170,65)" }}>4.4
                                <FaStar color="rgb(12,170,65)" fontSize="12px" />
                            </p>
                        </div>
                        <div onClick={() => { showDetail("Amazon", "https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png") }}>
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

            <Footer />
        </>
    )
}

