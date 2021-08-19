import styled from "styled-components";
import { FaStar } from 'react-icons/fa';
import { BiHeart } from 'react-icons/bi';
const Card = styled.div`
    color:grey;
    display: flex;
    width: 96%;
    justify-content: space-between;
    padding: 2% 2%;
    height: 100px;
    border-bottom:1px solid #d4d4d4;
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
export function JobCard({ imgUrl, company, jobProfile, location, salaryRange, rating, id, handleClick }) {
    return (
        <Card style={{cursor:"pointer"}} onClick={() => handleClick(id)}>
            <div style={{width: "20%"}}>
                <img src={imgUrl} alt="" />
                <p style={{ color: "rgb(12,170,65)" }}>{rating} <FaStar fontSize="12px" /></p>
            </div>
            <div style={{width: "50%"}}>
                <p>{company}</p>
                <h4>{jobProfile}</h4>
                <p>{location}</p>
                <p>{salaryRange} (Employer Est.)</p>
            </div>
            <div style={{width: "30%"}}>
                <div>
                    <BiHeart color="rgb(24,97,191)" fontSize="25px" />
                </div>
                <div>
                    <h4>Easy Apply</h4>
                    <p>1d</p>
                </div>
            </div>

        </Card>
    )
}