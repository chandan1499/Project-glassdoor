import styled from "styled-components";
import {useState} from "react";
import axios from 'axios';
// import FacebookIcon from '@material-ui/icons/Facebook';
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'


const SignInCont = styled.div`
    background: url(${"https://www.glassdoor.com/app/static/img/home/heroLaptop.jpg?v=674d79pgbp"});
    height: 590px;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    &>div>div>p:nth-of-type(1){
        font-size: 12px;
    }  ;
    p{
        font-size: 20px;
    }
    form{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }
    input{
        height: 30px;
        width: 75%;
        padding: 1.5%;
        border-radius: 5px;
        border: none;
        margin: 5px auto;
        
    }
    *{
        margin:0;
    }
    button{
        display: flex;
        justify-content: center;
        margin: 10px auto;
        align-items: center;
        border: none;
        width: 80%;
        position: relative;
        height: 37px;
        /* padding:0 3%; */
        border-radius: 5px;

    }
    form>button{
       background-color: rgb(24,119,242);
       width: 180px;
       color: rgb(171,204,247);
       font-weight: bold;
       font-size: 15px;

    }

    &>div>div>button>div>div{
        position:absolute;
        left:15px;
    }

    &>div>div{
        width: 500px;
        margin: auto;
        height: 65%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    }
    &>div{
        z-index: 1;
        background-color: rgb(80,88,99, 0.3);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;


export function SignInFormSection() {
    const [loginData, setLoginData] = useState({});

    const handleChange = (e)=>{
        const {name, value} = e.target;

        setLoginData({...loginData, [name]: value});
    }

    const postData = ()=>{
        axios.post("http://localhost:3001/glassdoorUsers", loginData).then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const handleLogin = (e)=>{
        e.preventDefault();

        if(loginData.email === undefined || loginData.password === undefined){
            alert("Email and password should not be empty!");
            return;
        }

        axios.get(`http://localhost:3001/glassdoorUsers?email=${loginData.email}`).then((res)=>{
            if(res.data.length != 0){
                if(res.data[0].password !== loginData.password){
                    alert("Invalid Credentials!");
                }
                else{
                    alert("Login sucussfully!");
                }
            }
            else{
                postData();
                alert('login sucussfully!');
            }
        }).catch((err)=>{
            console.log(err);
        })
    }


    return (
        <SignInCont img={"https://www.glassdoor.com/app/static/img/home/heroLaptop.jpg?v=674d79pgbp"}>
            <div>
                <div>
                <h1>Find The Job That Fits Your Life</h1>
                <p>By continuing, you agree to our Terms of Use and Privacy Policy.</p>
                <div>
                    <button style={{ backgroundColor: "rgb(24,119,242)", color: "white" }}>
                    <div>
                        <FaFacebook fontSize="25px" color="white"/>

                    </div>
                    <h3>Continue With Facebook</h3>
                </button>
                <button style={{ color: "rgb(220,78,65)", backgroundColor: "white", marginBottom:"10px" }}>
                    <div>
                        <FcGoogle fontSize="25px"/>

                    </div>
                    <h3>Continue With Google</h3>
                </button>
                </div>
                
                <hr />
                <form action="">
                    <input type="text" name="email" placeholder="Create Account with Email" onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                    <button onClick={handleLogin}>Continue with Email</button>
                </form>
                <p>Are You Hiring?Post Jobs</p>
            </div>
            </div>
            
        </SignInCont>
    )
}