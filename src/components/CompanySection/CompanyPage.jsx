import styled from "styled-components";
import {Navbar} from "../navbar";
import {Footer} from "../footer";
import { CompareCompany } from "./CompareCompany";
import { DiscoverCompanies } from "./DiscoverCompanies";
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
    return (
        <div>
            <Navbar />
            <CompanyNav>
                <div>Discover Companies</div>
                <div>Compare Companies</div>
                <div>Suggested Follows</div>
                <div>Write a Review</div>
            </CompanyNav>
            <DiscoverCompanies/>
            <Footer />
        </div>
    )
}