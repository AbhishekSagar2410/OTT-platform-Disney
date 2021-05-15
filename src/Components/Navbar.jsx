import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import NavBarLinks from '../Components/NavBarLinks'
import {auth,provider,storage} from './Firebase';
import {useDispatch,useSelector} from 'react-redux'
import {NavLink, useHistory} from 'react-router-dom';
import {userLogin,userLogout} from '../Features/Users/UserActions'



const Navbar = () => {
    const dispatch=useDispatch();
    const history=useHistory();
    
    // for redux state change
    // const getObj=useSelector((state)=> {return state.setUserLoginDetailsRedu})
    // const userName=getObj.name;

    //for react hooks
    const [userPhoto,setuserPhoto]=useState("");
    const [userName,setuserName]=useState("");
    
    //google authentication
    const handleAuth=()=>{

        if(!userName)
        {
            auth.signInWithPopup(provider)
            .then( (result)=>{
                console.log(result.user);
                //  setUser(result.user); for redux state change 
                setuserPhoto(result.user.photoURL);
                setuserName(result.user.displayName);
                 
                
            })
            .catch((error)=>{
                alert("Try Again");
            });
        }
        else if(userName){
            auth.signOut().then(()=>{
                setuserPhoto("");
                setuserName("")
                history.push('/');
            })
            .catch((error)=>{
                console.log(error.message);
            })
        }

        
    }

    //dispatch login info to redux store
     const setUser=(user)=>{
         dispatch(userLogin({
            name:user.displayName,
            email:user.email,
            photo:user.photoURL
        }))
    }
 
    //existing user
    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user)
            {
                setuserPhoto(user.photoURL);
                setuserName(user.displayName);
                
            }
        })
    },[userName])
    
    return (
        <>
        <Nav>
            

            <a href='/'>

            <DisneyLogo src="/Images/logo.svg" href='/'></DisneyLogo>
            </a>
           
            <NavBarLinks></NavBarLinks>
            {/* <Button onClick={handleAuth}>LOGIN</Button> */}

            {userName==""? 
            <>
                <Button type='button' onClick={handleAuth}>LOGIN</Button>
            </>:
            <>

                <SignOut>
                    <LoginImg src={userPhoto}></LoginImg>
                    <DropDown>
                        <span onClick={handleAuth}>Sign Out</span>
                    </DropDown> 
                </SignOut>

            </>
            }
        </Nav>
        </>
    )
}

const Nav=styled.nav`
    display: flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    background-color: #12121e;

`

const DisneyLogo=styled.img`
    max-width: 7rem;
    margin: 1rem 0rem 1rem 4rem;
    width:100%;
`
const Button=styled.button`
margin-left: auto;
margin-right: 2rem;
    padding: 1rem;
    font-family: inherit;
    font-weight: 700;
    margin-bottom:1rem;
    margin-top:1rem;
    outline:none;
    border:none;
    border-radius:2px;

    &:hover{
        background-color:#12121e;
        color:white;
    }
    
`

const LoginImg=styled.img`
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    border-radius: 17rem;

`
const DropDown=styled.div`
    cursor: pointer;
    padding: 0.5rem;
    position: absolute;
    top: 5rem;
    right: 0rem;
    font-size: 1.5rem;
    opacity:0;
`

const SignOut=styled.div`
margin: 1rem 2rem 1rem auto;
background: #110f24;
    border-radius: 1rem;

    &:hover{
        ${DropDown}{
            opacity:1;
            transition-duration:1s
        }
    }
`;


export default Navbar
