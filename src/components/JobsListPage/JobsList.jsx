import { Navbar } from "../navbar"
import { Footer } from "../footer"
import styled from "styled-components"
import axios from "axios"
import { useState, useEffect } from "react";
import { JobCard } from "./JobCard";
import SearchRight from "../Search_right";
const Cont = styled.div`
    background-color: white;
        width: 85%;
        border-radius: 5px;
        margin: 20px auto;
    &>div{
        display: flex;
        
        &>div:nth-of-type(1){
            height: 600px;
            /* overflow-y: auto; */
            width: 35%;
            border:1px solid #d4d4d4;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: auto;
        };
        &>div:nth-of-type(2){
            height: 600px;
            overflow-y: auto;
            overflow-x: hidden;
            width: 65%;
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
export function JobsList(state) {
    var query;
    if (state.location.state !== undefined) {
        query = state.location.state.query;
    }

    console.log(query);

    const [list, setList] = useState([]);
    const [rightShow, setRightShow] = useState({})
    useEffect(() => {
        if (query === undefined) {
            axios.get("https://glassdoor-clone-server.herokuapp.com/jobList").then(({ data }) => {
                console.log('res:', data);
                setList(data)
                setRightShow(data[0])
            }).catch((err) => {
                console.log('err:', err)

            })
        }
        else {
            axios.get(`https://glassdoor-clone-server.herokuapp.com/jobList?q=${query}`).then(({ data }) => {
                console.log('res:', data);
                setList(data)
                setRightShow(data[0])
            }).catch((err) => {
                console.log('err:', err)

            })
        }
    }, [query])

    const handleClick = (id) => {
        for (let elem of list) {
            if (elem.id === id) {
                setRightShow(elem);
                return;
            }
        }
    }
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
                        {
                            list.map((elem) => {

                                return <JobCard {...elem} key={elem.id} handleClick={handleClick} />
                            })
                        }

                    </div>
                    <div>
                        <SearchRight {...rightShow} btnStatus={"Easy Apply"} />
                    </div>
                </div>

            </Cont>
            <Footer />
        </>
    )
}