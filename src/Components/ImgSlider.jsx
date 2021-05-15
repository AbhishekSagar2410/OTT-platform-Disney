import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
      };

    return (
       <>
            <Carasoul {...settings}>
                <Wrap>
                    <SliderImg src='/Images/slider-badag.jpg'></SliderImg>
                </Wrap>
                <Wrap>
                    <SliderImg src='/Images/slider-badging.jpg'></SliderImg>
                </Wrap>
                <Wrap>
                    <SliderImg src='/Images/slider-scale.jpg'></SliderImg>
                </Wrap>
                <Wrap>
                    <SliderImg src='/Images/slider-scales.jpg'></SliderImg>
                </Wrap>
            </Carasoul>

       </>
    )
}


const Carasoul =styled(Slider)`
width:90vw;
position: relative;
    top: 7rem;
    left: 7rem;

    @media(max-width:786px){
        left:2rem;
    }

    &>button{
        opacity:0;

        &:hover{
            opacity:1;
            transition:opacity 0.2s ease 0s
        }

    }

    ul li button{
        &:before{
            font-size:1rem;
            color:white;
        }
    }

    .slick-list{
        overflow:initial;
    }

`

const Wrap=styled.div`
    cursor:pointer;
    padding:1rem;
    border:none;
    outline:none;
    @media(max-width:786px){
        padding:0rem
    }
    `

const SliderImg=styled.img`
    width: 100%;
    border-radius:1rem;
    border:none;
    outline:none;
    padding:0.5rem;

    &:hover{
        padding:0rem;
        border: 0.5rem solid white;
        transition:500ms;   
    }
    @media(max-width:786px){
        padding:0.3rem;

        &:hover{
        padding:0rem;
        border: 0.3rem solid white;
        transition:500ms;   
        }
    }
`

export default ImgSlider
