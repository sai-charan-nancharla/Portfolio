import React from 'react'
import "./Home.css";
import { SiGithub } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { IoMailOutline } from "react-icons/io5";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
        
        <div className='card'>
            <div className='name-title'>
                <h1>Hi I'm Sai Charan Nancharla.</h1>
            </div> 
            <p className='tagline'>I love learning and even more, putting that knowledge into <code><span style={{color:'yellow',fontWeight:"bold",fontSize:"large"}}>Action</span></code>.</p>
	
        </div>
        <div className="social">
            <a href='mailto:saicharannancharla1@gmail.com'><IoMailOutline style={{ fontSize: '2.5rem' }} className='profiles'/></a>
            <a href='https://www.linkedin.com/in/sai-charan-nancharla-9937a1237/'><GrLinkedin style={{ fontSize: '2rem' }} className='profiles' /></a>
            <a href='https://github.com/sai-charan-nancharla'><SiGithub style={{ fontSize: '2.3rem' }} className='profiles'/></a>
        </div>
        <Footer className='footer'/>
        </>
    )
}

export default Home