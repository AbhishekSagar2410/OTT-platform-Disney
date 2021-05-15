import React,{useEffect} from 'react'
import { useParams } from 'react-router';
import GetData from './GetData';
import Navbar from './Navbar';


const DetailPage = () => {
    useEffect(()=>{
        document.title='Movie | Disney';
    })

    const {imgNo}=useParams();
    console.log(imgNo);

    return (
        <>
            <Navbar></Navbar>
            <GetData imgNo={imgNo}></GetData>
        </>
    )
}


export default DetailPage;
