import styled from "styled-components";
import { Navbar } from "../navbar";
import { Footer } from "../footer";
// import { CompareCompany } from "./CompareCompany";
import { DiscoverCompanies } from "./DiscoverCompanies";
import { Link } from "react-router-dom";
import { useEffect } from "react"
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



export function CompanyPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Navbar />
            <CompanyNav>
                <Link to="/companies"><div>Discover Companies</div></Link>
                <Link to="/CompareCompany"> <div>Compare Companies</div></Link>
                <div>Suggested Follows</div>
                <Link to="/reviewForm"><div>Write a Review</div></Link>
            </CompanyNav>
            <DiscoverCompanies />
            <Footer />
        </div>
    )
}