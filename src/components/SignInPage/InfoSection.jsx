import styled from "styled-components"
import { BsSearch } from 'react-icons/bs';
import { BsChat } from 'react-icons/bs';
import { AiOutlineDollar } from 'react-icons/ai';
import { CgBriefcase } from 'react-icons/cg';
const InfoCont = styled.div`
position: relative;
    
    text-align: center;
    h2{
        margin-top: 0;
        font-size: 35px;
        font-weight: 500;
    }
    &>div:nth-of-type(1){
        font-size: 20px;
        font-weight: 500;
        background-color: rgb(245,246,247);
        height: 200px;
        padding: 1%;
    }
    &>div:nth-of-type(2){
        width: 70%;
        margin: auto;
        padding: 1%;
    }
    &>div:nth-of-type(1)>div{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        

    }
    &>div:nth-of-type(1)>div>div{
        margin: 0 2%;
    }
`;

// const DropDown = styled.div`

// `


export function InfoSection() {
    return (
        <InfoCont>
            <div>
                <h2>How Glassdoor Works for You</h2>
                <div>
                    <div>
                    <BsSearch color="rgb(12,170,65)" fontSize="50px"/>
                    <p>Find the Right Job</p>
                </div>
                <div>
                    <BsChat color="rgb(12,170,65)" fontSize="50px"/>
                    <p>Research Companies</p>
                </div>
                <div>
                    <AiOutlineDollar color="rgb(12,170,65)" fontSize="50px"/>
                    <p>Compare Salaries</p>
                </div>
                <div>
                    <CgBriefcase color="rgb(12,170,65)" fontSize="50px"/>
                    <p>Apply To Job</p>
                </div>
                </div>
                
            </div>
            <div>
                <h1>Explore Glassdoor</h1>
                <p>Millions of people are searching for jobs, salary information, company reviews, and interview questions. See what others are looking for on Glassdoor today.</p>
                
            </div>
        </InfoCont>
    )
}