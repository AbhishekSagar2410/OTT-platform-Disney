import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const GetData = ({ imgNo }) => {

    const styleDiv = {
        background: `url(/Detail/${imgNo}.jpg) no-repeat center center/cover`,
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        display: "flex",
        alignItems: "center",
    }

    return (
        <>
            <div style={styleDiv}>
                <ContentDiv>
                    <ButtonContainer>
                        <NavLink exact to='/'>

                            <Button1>
                                <PlayArrowIcon></PlayArrowIcon>
                        PLAY
                        </Button1>
                        </NavLink>

                        <NavLink exact to='/'>

                            <Button2>
                                <PlayArrowIcon></PlayArrowIcon>
                        TRAILER
                        </Button2>
                        </NavLink>

                        <NavLink exact to='/'>

                            <ButtonIcon>
                                <AddIcon></AddIcon>
                            </ButtonIcon>
                        </NavLink>

                        <NavLink exact to='/'>
                            <ButtonIcon>
                                <GroupAddIcon></GroupAddIcon>
                            </ButtonIcon>
                        </NavLink>
                    </ButtonContainer>

                    <GenreDescrip>2hr 17min | 2017 | Fantasy, Animation, Comedy, Action , Horror</GenreDescrip>
                    <Descrip>© 2021 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and
                    all related programming visuals and elements are
                    the property of, Home Box Office, Inc.
                    All rights reserved.
                     </Descrip>

                </ContentDiv>
            </div>
        </>
    )
}

const ContentDiv = styled.div`
    position: relative;
    left: 5rem;
    top: 10rem;
    display:flex;
    flex-direction:column;
    padding:2rem;
    width:auto;

    @media(max-width:786px){
        left: 0rem;
        top:8rem;
        padding:1rem;
    }
    

`

const GenreDescrip = styled.p`
max-width: 60rem;
    margin-top: 2rem;
    font-size: 1.2rem;
    font-family: system-ui;
    font-weight: 500;
    letter-spacing: 0.2rem;
    @media(max-width:786px){
        font-size: 1rem;
    }
`
const Descrip = styled.p`
max-width: 70rem;
    margin-top: 2rem;
    font-size: 1.5rem;
    font-family: system-ui;
    font-weight: 700;
    letter-spacing: 0.2rem;
    @media(max-width:786px){
        font-size: 1.3rem;
    }
`

const ButtonContainer = styled.div`
    
    display:flex;
    justify-content:flex-start;
    align-items:center;

    a{
        text-decoration:none;
    }
    

`

const Button1 = styled.button`
    
    height: 5rem;
    width: 9rem;
    outline: none;
    border-radius: 0.5rem;
    border:1px solid white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: revert;
    font-weight: bolder;
    background-color: #2d3a36;
    color: white;
    transition:transform 450ms;
    text-decoration:none;
    svg{
        font-size:3rem;
    }

    &:hover{
        background-color:white;
        color:black;
        transform:scale(1.10);
    }

    @media(max-width:786px){
        height: 4rem;
    width: 7rem;
    svg{
        font-size:2rem;
    }
    }



`
const Button2 = styled.button`
margin-left: 2rem;
    height: 5rem;
    width: 12rem;
    outline: none;
    border-radius: 0.5rem;
    border:1px solid white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: revert;
    font-weight: bolder;
    background-color: #2d3a36;
    color: white;
    transition:transform 450ms;
    svg{
        font-size:3rem;
    }

    &:hover{
        background-color:white;
        color:black;
        transform:scale(1.10);
    }

    @media(max-width:786px){
        height: 4rem;
    width: 10rem;
    svg{
        font-size:2rem;
    }
    }


`


const ButtonIcon = styled.button`
margin-left: 2rem;
    height: 4rem;
    width: 4rem;
    outline: none;
    border-radius: 4rem;
    border:1px solid white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: revert;
    font-weight: bolder;
    background-color: #2d3a36;
    color: white;
    transition:transform 450ms;
    svg{
        font-size:3rem;
    }

    &:hover{
        background-color:white;
        color:black;
        transform:scale(1.10);
    }

`

export default GetData;
