import styled from "styled-components";
import { Navbar } from "../navbar";
import { Footer } from "../footer";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaStar } from 'react-icons/fa';
import { BsStar } from 'react-icons/bs';
import axios from 'axios';
import { ModalPage } from "../Modal/Modal";

const CompareCont = styled.div`
    width: 1000px;
    background-color: white;
    height: 500px;
    margin: 20px auto;
    
    border: 2px solid #cecece;
    border-radius: 3px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    img{
        width: 450px;
        position: absolute;
    };
    img:nth-of-type(1){
        left: 0;
    };
    img:nth-of-type(2){
        right: 0;
    }
    input{
        height: 40px;
        width: 190px;
        margin: 20px;
        padding: 0 1%;
        color: grey;
        border: 1px solid #cccccc;
        border-radius: 3px;
        font-weight: 600;
    }
    
    button{
        background-color: rgb(12,170,65);
        color: white;
        font-weight: bold;
        border: none;
        border-radius: 3px;
        height: 45px;
        width: 400px;
        font-size: 18px;
    }
    &>div{
        display: flex;
        flex-direction: column;
        z-index: 1;
        width: 45%;
        justify-content: center;
        align-items: center;
    }
    &>div>div{
        display: flex;
        font-weight: 400;
    }

`;

const CompanyList = styled.div`
    width: 1000px;
    background-color: white;
    margin: 20px auto;
    border: 2px solid rgb(206, 206, 206);
    border-radius: 3px;
    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: space-around;
    padding:  1% 0;
    /* height: 800px; */
    img{
        width: 50px;
        border: 1px solid rgb(172, 172, 172, 0.5);
        border-radius: 3px;
    };
    &>div{
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin-bottom: 40px;
    }
    &>div>div{
        /* border:2px solid  rgb(172, 172, 172); */
        width: 50%;
        height: 80px;
         /* border:2px solid  rgb(172, 172, 172); */
         padding: 2%;
         

    }
    &>div>div>div{
        border:2px solid  rgb(172, 172, 172, 0.7);
        display: flex;
        width: 100%;
        padding: 4%;
        
        /* height: 100%; */
    }
    &>div>div>div:nth-child(1){
        height: 65%;
    }
    &>div>div>div:nth-child(2){
        height: 35%;
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



export function CompareCompany() {
    const [companies, setCompanies] = useState({});
    const history = useHistory();
    const [firstCompany, setFirstCompany] = useState({});
    const [secondCompany, setSecondCompany] = useState({});
    const [modalStatus, setModalStatus] = useState({
        isOpen: false,
        messege: ""
    });

    const handleHideModal = () => {
        setTimeout(() => {
            setModalStatus({...modalStatus, isOpen: false, messege: ""});
        },3000)
    }


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompanies({ ...companies, [name]: value });
    }

    const handleComparison = async () => {
        if ((companies.company1 === undefined || companies.company2 === "") || companies.company2 === undefined || companies.company1 === "") {
            setModalStatus({...modalStatus, isOpen: true, messege: "Please type correct company name!"});
            handleHideModal();
            return;
        }

        companies.company1 = companies.company1[0].toUpperCase() + companies.company1.substring(1);
        companies.company2 = companies.company2[0].toUpperCase() + companies.company2.substring(1);

        getData(companies.company1, 1);
        getData(companies.company2, 2);
    }

    const getData = (name, num) => {
        axios.get(`https://glassdoor-clone-server.herokuapp.com/companies?q=${name}`).then((res) => {
            if (res.data.length === 0) {
                setModalStatus({...modalStatus, isOpen: true, messege: `${name} is not registered!`});
                handleHideModal();
                return;
            }

            if (num === 1) {
                setFirstCompany({ ...res.data[0] });
            }
            else {
                setSecondCompany({ ...res.data[0] });
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        showComparison();
    }, [secondCompany])

    const showComparison = () => {
        if (Object.keys(firstCompany).length === 0 || Object.keys(secondCompany).length === 0) {
            return;
        }

        history.push({
            pathname: "/ShowComparison",
            state: {
                first: firstCompany,
                second: secondCompany
            }
        });
    }

    return (
        <div>
            <ModalPage isOpen={modalStatus.isOpen} messege={modalStatus.messege} />
            <Navbar />
            <CompanyNav>
                <Link to="/companies"><div>Discover Companies</div></Link>
                <Link to="/CompareCompany"> <div>Compare Companies</div></Link>
                <div>Suggested Follows</div>
                <Link to="/reviewForm"><div>Write a Review</div></Link>
            </CompanyNav>

            <CompareCont>

                <img src="https://www.glassdoor.co.in/eiCompare/static/96b453b751fb9c95ceb167faf0122572.png" alt="" />

                <div>
                    <h1>Compare companies to find your perfect fit</h1>
                    <div>
                        <input type="text" name="company1" placeholder="Company name" onChange={handleChange} />
                        <h2>VS</h2>
                        <input type="text" name="company2" placeholder="Company name" onChange={handleChange} />
                    </div>
                    <button onClick={handleComparison}>Compare Companies</button>
                    <p>Choose two companies to compare using data only found on Glassdoor.</p>
                </div>

                <img src="https://www.glassdoor.co.in/eiCompare/static/d89014b6c03b5801900207ad3e6ea36b.png" alt="" />

            </CompareCont>
            <div style={{ width: "1000px", margin: "auto", textAlign: "left", fontWeight: "400" }}>
                <h2>Popular Companies Comparisons</h2>
            </div>
            <CompanyList>
                <div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/4138/accenture-squarelogo-1603988625135.png" alt="" />
                            </div>
                            <div>
                                <div>4.0</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Accenture
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png" alt="" />
                            </div>
                            <div>
                                <div>4.3</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Amazon
                        </div>
                    </div>

                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/8014/cognizant-technology-solutions-squarelogo-1533046362395.png" alt="" />
                            </div>
                            <div>
                                <div>3.8</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Cognizant
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/4138/accenture-squarelogo-1603988625135.png" alt="" />
                            </div>
                            <div>
                                <div>4.0</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Accenture
                        </div>
                    </div>

                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/4138/accenture-squarelogo-1603988625135.png" alt="" />
                            </div>
                            <div>
                                <div>4.0</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Accenture
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/42613/genpact-squarelogo-1505910332584.png" alt="" />
                            </div>
                            <div>
                                <div>3.8</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Genpact
                        </div>
                    </div>

                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/7927/infosys-squareLogo-1620208556721.png" alt="" />
                            </div>
                            <div>
                                <div>3.8</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Infosys
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/4138/accenture-squarelogo-1603988625135.png" alt="" />
                            </div>
                            <div>
                                <div>4.0</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Accenture
                        </div>
                    </div>

                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/425536/oil-and-natural-gas-squarelogo-1562740594850.png" alt="" />
                            </div>
                            <div>
                                <div>4.2</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Oil and Natural Gas
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/6341/indian-oil-squarelogo.png" alt="" />
                            </div>
                            <div>
                                <div>4.3</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Indian Oil
                        </div>
                    </div>

                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/11763/icici-bank-squarelogo.png" alt="" />
                            </div>
                            <div>
                                <div>3.7</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            ICICI Bank
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/434136/kotak-mahindra-squarelogo.png" alt="" />
                            </div>
                            <div>
                                <div>3.5</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Kotak Mahindra Bank
                        </div>
                    </div>

                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/4138/accenture-squarelogo-1603988625135.png" alt="" />
                            </div>
                            <div>
                                <div>4.0</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Accenture
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/9936/wipro-squareLogo-1624895061639.png" alt="" />
                            </div>
                            <div>
                                <div>3.7</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Wipro
                        </div>
                    </div>

                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png" alt="" />
                            </div>
                            <div>
                                <div>4.3</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Amazon
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/8418/amdocs-squarelogo-1503490445898.png" alt="" />
                            </div>
                            <div>
                                <div>3.9</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Amdocs
                        </div>
                    </div>

                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png" alt="" />
                            </div>
                            <div>
                                <div>4.3</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Amazon
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/690021/byju-s-squarelogo-1607329527740.png" alt="" />
                            </div>
                            <div>
                                <div>3.3</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            BYJU'S
                        </div>
                    </div>

                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/3472/ericsson-worldwide-squarelogo-1522695466023.png" alt="" />
                            </div>
                            <div>
                                <div>4.1</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Ericsson-Worldwide
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src="https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png" alt="" />
                            </div>
                            <div>
                                <div>4.2</div>
                                <div><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><FaStar fontSize="10px" color="rgb(13,171,66)" /><BsStar fontSize="10px" color="rgb(13,171,66)" /></div>
                            </div>
                        </div>
                        <div>
                            Amazon
                        </div>
                    </div>

                </div>

            </CompanyList>

            <Footer />
        </div>
    )
}