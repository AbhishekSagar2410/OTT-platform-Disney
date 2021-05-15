import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Recommended = () => {
    return (
        <Conatiner>
            <Heading>Recommended for you</Heading>
            <MovieConatiner>
                <NavLink exact to='/detail/img1'>
                    <MovieImg src='/RecommendImg/img1.jpg'></MovieImg>
                </NavLink>

                <NavLink exact to='/detail/img2'>
                    <MovieImg src='/RecommendImg/img2.jpg'></MovieImg>
                </NavLink>

                <NavLink exact to='/detail/img3'>
                    <MovieImg src='/RecommendImg/img3.jpg'></MovieImg>
                </NavLink>

                <NavLink exact to='/detail/img4'>
                    <MovieImg src='/RecommendImg/img4.jpg'></MovieImg>
                </NavLink>

                <NavLink exact to='/detail/img5'>
                    <MovieImg src='/RecommendImg/img5.jpg'></MovieImg>
                </NavLink>

                <NavLink exact to='/detail/img6'>
                    <MovieImg src='/RecommendImg/img6.jpeg'></MovieImg>
                </NavLink>

            </MovieConatiner>
        </Conatiner>
    )
}

const Conatiner = styled.div`
    margin-top: 3rem;
    margin-bottom: 10rem;
    
 `;

const Heading = styled.h1`
    margin-left:3rem;

    `

const MovieConatiner = styled.div`
display:flex;
    justify-content:space-around;
    align-items:center;
    margin: 2rem 0rem 2rem 0rem;
    width: 100%;
    padding: 2rem;
    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar{
    display: none;
}
`;

const MovieImg = styled.img`
    max-height: 17rem;
    max-height: 30rem;
    margin-right: 1rem;
    object-fit: contain;
    transition: transform 450ms;
    box-shadow: 1rem 1rem 1rem #000000;
    &:hover{
        transform:scale(1.10);
    }
    
    `
export default Recommended;
