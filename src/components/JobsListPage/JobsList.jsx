import { Navbar } from "../navbar"
import { Footer } from "../footer"
import styled from "styled-components"
import axios from "axios"
import { FaStar } from 'react-icons/fa';
import { BiHeart } from 'react-icons/bi';
const Cont = styled.div`
    background-color: white;
        width: 80%;
        border-radius: 5px;
        margin: 20px auto;
    &>div{
        display: flex;
        
        &>div:nth-of-type(1){
            height: 600px;
            overflow-y: scroll;
        }
    }
    
`

const Card = styled.div`
    color:grey;
    display: flex;
    width: 450px;
    justify-content: space-between;
    padding: 2% 1%;
    height: 100px;
    border:1px solid #d4d4d4;
    img{
        width: 40px;
        border:1px solid #d4d4d4;
        border-radius: 3px;
    }
    h3, p, h4{
        margin: 0;
    }
    &>div:nth-of-type(3){
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &>div{
            display: flex;
            justify-content: flex-end;
            *{
                margin: 4px;
            }
        }
    }
`
const InnerNav = styled.div`
    background-color: white;
    display: flex;
    height: 70px;
    align-items: center;
    select{
        height: 40px;
        border: 1px solid #cecece;
        width: 180px;
        font-size: 17px;
        color: gray;
        margin: 0 7px;
    }
`
export function JobsList() {
    
    return (
        <>
            <Navbar />
            
            <Cont>
                <InnerNav>
                <select name="" id="">
                    <option value="">All Job Types</option>
                    <option value="">Full-time</option>
                    <option value="">Part-time</option>
                    <option value="">Temporary</option>
                    <option value="">Entry-level</option>
                </select>
                <select name="" id="">
                    <option value="">Posted Any Time</option>
                    <option value="">Last Day</option>
                    <option value="">Last 3 Days</option>
                    <option value="">Last Week</option>
                    <option value="">Last 2 Weeks</option>
                    <option value="">Last Month</option>
                </select>
                <select name="" id="">
                    <option value="">₹10L-₹20L</option>
                </select>
                <select name="" id="">
                    <option value="">Exact Location</option>
                    <option value="">Within 10 km</option>
                    <option value="">Within 20 km</option>
                    <option value="">Within 30 km</option>
                    <option value="">With 50 km</option>
                    <option value="">Within 50 km</option>
                    <option value="">Within 100 km</option>
                </select>
                
            </InnerNav>
                <div>
                    <div>
                    <Card>
                        <div>
                            <img src="https://media.glassdoor.com/sql/9079/google-squarelogo-1441130773284.png" alt="" />
                          <p style={{color:"rgb(12,170,65)"}}>4.8 <FaStar fontSize="12px"/></p> 
                        </div>
                        <div>
                            <p>Google</p>
                            <h4>Full Stack Developer</h4>
                            <p>Bangalore</p>
                            <p>₹25L-₹40L (Employer Est.)</p>
                        </div>
                        <div>
                            <div>
                                <BiHeart color="rgb(24,97,191)" fontSize="25px"/>
                            </div>
                            <div>
                                <h4>Easy Apply</h4>
                                <p>7d</p>
                            </div>
                        </div>

                    </Card>

                </div>
                </div>
                
            </Cont>
            <Footer/>
        </>
    )
}