import styled from "styled-components";
import { Navbar } from "../navbar";
import { Footer } from "../footer";
import { Redirect, useHistory } from "react-router-dom";
import { useState } from "react";
import { FaStar } from 'react-icons/fa';
import { BsStar } from 'react-icons/bs';

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


export function CompareCompany() {
    const [companies, setCompanies] = useState({});
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompanies({ ...companies, [name]: value });
    }

    const handleComparison = () => {
        if ((companies.company1 == undefined || companies.company2 == "") || companies.company2 == undefined || companies.company1 == "") {
            alert("Please type correct company name!");
            return;
        }

        history.push("/ShowComparison");
    }

    return (
        <div>
            <Navbar />

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
            </CompanyList>

            <Footer />
        </div>
    )
}