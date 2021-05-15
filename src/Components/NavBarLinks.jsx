import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const NavBarLinks = () => {
    return (
        <>
            <UnOrdered>
                <StyleNavLink exact to="/home"><ListItems>TV</ListItems></StyleNavLink>
                <StyleNavLink exact to='/home'><ListItems>Movies</ListItems></StyleNavLink>
                <StyleNavLink exact to='/home'><ListItems>Sports</ListItems></StyleNavLink>
                <StyleNavLink exact to='/home'><ListItems>News</ListItems></StyleNavLink>
                <StyleNavLink exact to='/home'><ListItems>Premium</ListItems></StyleNavLink>
            </UnOrdered>
        </>
    )
}


const UnOrdered = styled.ul`
    display:flex;
    justify-content:space-around;
    align-items:center;
    list-style:none;
    max-width: 55rem;
    width: 100%;
    @media(max-width:768px)
    {
        display:none;

    }
`

const ListItems = styled.li`
    margin: 1rem 0rem 1rem 0rem;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-family: inherit;
    font-weight: 700;
    text-align: center;
    justify-content:space-around;
    display:flex;


    /* for underline effect */
    &:before{
        content: "";
    height: 2px;
    position: absolute;
    bottom: 10px;
    background-color: white;
    max-width:7rem;
    width:100%;
    transform-origin: left center;
    transform: scaleX(0);
    transition:all 250ms cubic-bezier(0.075, 0.82, 0.165, 0.95);
    visibility:hidden;
    opacity:0;

    }

    &:hover{
        &:before{
            transform:scaleX(1);
            visibility:visible;
            opacity:1;
        }
    }

    /* border: 2px solid;
    border-top: none;
    border-left: none;
    border-right: none; */
`

const StyleNavLink = styled(NavLink)`
    text-decoration:none;
cursor: pointer;

`

export default NavBarLinks
