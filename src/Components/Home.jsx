import React, { useEffect } from 'react'
import Navbar from './Navbar';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommended from './Recommended';
const Home = () => {

    useEffect(()=>{
        document.title='Home | Disney';
    })

    return (
        <>
            <Navbar></Navbar>
            <Container>
                <ImgSlider></ImgSlider>
                <Viewers></Viewers>
                <Recommended></Recommended>
            </Container>
        </>
    )
}

const Container=styled.div`
    position: absolute;
    
    left: 0;
    background: url(/Images/home-background.png) center center/cover;
    min-height: calc(100vh);
    width: 100vw;
    z-index: -2;

`

export default Home
