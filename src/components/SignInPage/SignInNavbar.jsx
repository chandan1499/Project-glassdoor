import styled from "styled-components";
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import {useState} from "react";


const Navbar = styled.nav`
    text-align: center;
    height: 60px;
    background-color: rgb(255,255,255);
    /* background-color: green; */
    color: rgb(80,88,99);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 15px;
    padding: 0 2%;
    & img{
        /* margin: 2%; */
        height: 25px;
    }
    &>div{
        display: flex;
        /* width: auto; */
        width: 30%;
        justify-content: space-between;
        
    }
    &>div>div{
        display: flex;
        width: 25%;
        margin: 4%;
        justify-content: center;
        cursor: pointer;
    }
    &>div:nth-of-type(2)>div:nth-of-type(3){
        color: rgb(24,97,191) !important;
    }
`;
const Modal = styled.div`
    position:absolute;
    top:40px;
    width: 70%;
    border:1px solid rgb(59, 59, 59, 0.3);
    border-radius:5px;
    margin:auto;
    /* display:flex; */
    justify-content:space-between;
    align-items:center;
    z-index:2;
    background-color:white;
    left:13%;
    height:190px;
    padding: 1%;
    h3{
        font-size: 17px;
        font-weight: 500;
    }
    img{
        width:90%;
        
    }
    button{
        background-color:white;
        color:rgb(24,97,191);
        border: 2px solid rgb(24,97,191);
        border-radius:5px;
        height:40px;
        width:200px;
        cursor: pointer;
    }
    &>div:nth-of-type(2){
        width: 400px;
    }
`;

export function SignInNavbar() {
    const [jobsModal, setJobsModal] = useState("none");
    const [companiesModal, setCompaniesModal] = useState("none");
    const [salariesModal, setSalariesModal] = useState("none");
    const [interviewsModal, setInterviewsModal] = useState("none");
    const [employersModal, setEmployersModal] = useState("none");

    return (
        <>
            <Navbar>
                <div>
                    <div>
                        <img src="/glassdoorLogo.png" alt="" />
                    </div>
                    <div onMouseOver={()=>setJobsModal("flex")} onMouseOut={()=>setJobsModal("none")}>Jobs</div>
                    <div onMouseOver={()=>setCompaniesModal("flex")} onMouseOut={()=>setCompaniesModal("none")}>Companies</div>
                    <div onMouseOver={()=>setSalariesModal("flex")} onMouseOut={()=>setSalariesModal("none")}>Salaries</div>
                    <div onMouseOver={()=>setInterviewsModal("flex")} onMouseOut={()=>setInterviewsModal("none")}>Interviews</div>
                </div>
                
                <div>
                    <div onMouseOver={()=>setEmployersModal("flex")} onMouseOut={()=>setEmployersModal("none")}>For Employers</div>
                    <div>
                        <BusinessCenterOutlinedIcon/>
                    Post Jobs

                    </div>
                    <div >  Sign In</div>
                </div>
            </Navbar>
            
                <Modal style={{display: jobsModal}} onMouseOver={()=>setJobsModal("flex")} onMouseOut={()=>setJobsModal("none")}>
                    <div>
                        <h2>Find the Right Job</h2>
                        <p>Millions of jobs. Search by what matters to you and find the one that's right for you.</p>
                        <button>Start Using Glassdoor</button>
                    </div>
                    <div>
                        <img src="https://www.glassdoor.co.in/app/static/img/lockedHomeHeader/jobs@2x.png" alt="" />
                    </div>
                </Modal>
                <Modal style={{display: companiesModal}} onMouseOver={()=>setCompaniesModal("flex")} onMouseOut={()=>setCompaniesModal("none")}>
                    <div>
                        <h2>Read Millions of Reviews</h2>
                        <p>Read anonymous reviews on over 600,000 companies worldwide from the people that work there.</p>
                        <button>Start Using Glassdoor</button>
                    </div>
                    <div>
                        <img src="https://www.glassdoor.co.in/app/static/img/lockedHomeHeader/reviews@2x.png" alt="" />
                    </div>
                </Modal>
                <Modal style={{display: salariesModal}} onMouseOver={()=>setSalariesModal("flex")} onMouseOut={()=>setSalariesModal("none")}>
                    <div>
                        <h2>Compare Salaries</h2>
                        <p>Are you paid fairly? Get a free, personalised salary estimate and compare with millions of salaries.</p>
                        <button>Start Using Glassdoor</button>
                    </div>
                    <div>
                        <img src="https://www.glassdoor.co.in/app/static/img/lockedHomeHeader/salaries@2x.png" alt="" />
                    </div>
                </Modal>
                <Modal style={{display: interviewsModal}} onMouseOver={()=>setInterviewsModal("flex")} onMouseOut={()=>setInterviewsModal("none")}>
                    <div>
                        <h2>Prepare for Interviews</h2>
                        <p>Read interview questions ahead of time so you can prep with confidence.</p>
                        <button>Start Using Glassdoor</button>
                    </div>
                    <div>
                        <img src="https://www.glassdoor.co.in/app/static/img/lockedHomeHeader/interview@2x.png" alt="" />
                    </div>
                </Modal>
                <Modal style={{display: employersModal}} onMouseOver={()=>setEmployersModal("flex")} onMouseOut={()=>setEmployersModal("none")}>
                    <div>
                        <h3>Sign In to Employer Center</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores?</p>
                    </div>
                    <div>
                    <h3>Post a Job</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae repellendus voluptate?</p>
                    </div>
                    <div>
                    <h3>Glassdoor For Employer Blog</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa consequuntur iusto eaque?</p>
                    </div>
                    <div>
                    <h3>Talk to Sales</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </Modal>    
        </>
    )
}