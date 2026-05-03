import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';


const Footer = () => {
	const year = new Date().getFullYear();

	return (
		
			<div className='footer' >
				<p>© {year} Developed by Sai Charan.</p>
			</div>
		
	);
}

export default Footer;