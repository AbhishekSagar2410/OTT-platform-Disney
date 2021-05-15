import React,{useEffect} from 'react'
import styled from 'styled-components';
import Navbar from '../Components/Navbar'
const LoginPage = () => {
    useEffect(()=>{
        document.title='Login | Disney';
    })
    return (
        <>
        <Contanier>
            <BgImage></BgImage>
            <Navbar></Navbar>
            <Content>
                <LOGOdiv>
                    <LOGO src="/Images/cta-logo-one.svg" alt=""></LOGO>
                </LOGOdiv>
                <LOGOdiv>
                    <a href="/home">
                        <Button >GET ALL THERE</Button>
                    </a>
                </LOGOdiv>
                    <Discri>© 2021 STAR. All Rights Reserved. HBO, Home Box Office 
                    and all related channel and programming logos are service marks, Inc. All rights reserved.</Discri>

                <LOGOdiv>
                    <LOGO src="/Images/cta-logo-two.png" alt=""></LOGO>
                </LOGOdiv>
            </Content>
        </Contanier>
        </>
    )
}

const Contanier = styled.div`
overflow:hidden;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        text-align: center;
        height: 100vh;
    `;
const Content = styled.div`
display:flex;
flex-direction:column;
    
`;



const BgImage = styled.div`
height:100vh;
width:100vw;
background-image:url('/Images/login-background.jpg');
position:absolute;
z-index:-1;
top:0;
left:0;
`

const LOGOdiv = styled.div`
margin:1rem 2rem 1rem 2rem;
`;



const Discri=styled.p`
max-width:60rem;
    margin:0rem 3rem 1rem 3rem;
       font-size: 1.2rem;
    font-family: sans-serif;
    font-weight: 600;
    line-height: 1.9rem; 
    letter-spacing:2px;
`

const LOGO = styled.img`
        max-width: 60rem;
    width: 100%;
    margin: 1rem 0rem 0rem 0rem;
`;

const Button = styled.button`
    max-width: 60rem;
    width: 100%;
    height: 5rem;
    background-color: #0d54c0;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    color: white;
    font-size: 1.7rem;
    font-weight: 700;
    cursor: pointer;
    text-transform:capitalize;

    &:hover{
        background-color:#023786;
    }
`


export default LoginPage;
