import React from 'react'
import styled from 'styled-components';

const Viewers = () => {
    return (
        <ViewerCont>
            <Wrap>
                <ViewersImg src='/Images/viewers-disney.png'></ViewersImg>
                <video width="100" height="350" autoplay="true" loop="true" playsInline="true" preload={true}>
                    <source src="/Videos/disney.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>

                <ViewersImg src="/Images/viewers-marvel.png"></ViewersImg>
                <video width="100" height="350" autoplay="true" loop="true" playsInline="true" preload={true}>
                    <source src="/Videos/marvel.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>

                <ViewersImg src="/Images/viewers-national.png"></ViewersImg>
                <video width="100" height="350" autoplay="true" loop="true" playsInline="true" preload={true}>
                    <source src="/Videos/natgeo.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>

                <ViewersImg src="/Images/viewers-pixar.png"></ViewersImg>
                <video width="100" height="350" autoplay="true" loop="true" playsInline="true" preload={true}>
                    <source src="/Videos/pixar.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>

                <ViewersImg src="/Images/viewers-starwars.png"></ViewersImg>
                <video width="100" height="350" autoplay="true" loop="true" playsInline="true" preload={true}>
                    <source src="/Videos/starwars.mp4" type="video/mp4" />
                </video>
            </Wrap>
        </ViewerCont>
    )
}

const ViewerCont = styled.div`
    margin-top: 12rem;
    display:flex;
    justify-content:space-around;
    align-items:center;

    @media(max-width:786px){
        flex-flow:column;

        img{
            margin-bottom:3rem;
        }
    }

`
const Wrap = styled.div`
max-width: 25rem;
height: 16rem;
padding: 1rem;
border-radius: 1rem;
transition: transform 450ms;
border: 4px solid #23232d;

&:hover{
    transform: scale(1.07);
    border: 2px solid white;

    video{
        opacity:1;
    }

    }

    video{
        top: -153px;
        height: 19rem;
        position: relative;
        left: -10px;
        width: 24rem;
        z-index: -1;
        opacity: 0;
    }

    @media(max-width:786px){

            margin-bottom:3rem;
            video{
                top: -187px;
    }
        
    }

`

const ViewersImg = styled.img`
width:100%;
   
&:hovervideo{
    opacity:1;
}

`

export default Viewers
