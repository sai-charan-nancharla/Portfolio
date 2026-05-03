import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "./constants.js";
import Footer from "./Footer";
import "./Contact.css";


const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "", 
		email: "",
		message: "",
	});


	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// cleaning the form data 
		const username = form.name.trim();
		const user_email = form.email.trim();
		const user_message = form.message.trim();

		if (username === '' || user_email === '' || user_message === '') {
			setLoading(false);
			// toast.error("Please fill all the fields.", {
			// 	position: 'bottom-right',
			// });
			return;
		}
		console.log(username,user_email,user_message)

		emailjs
			.send(
				EMAIL_JS_SERVICE_ID,
				EMAIL_JS_TEMPLATE_ID,
				{
					from_name: username,
					to_name: "Sai Charan Nancharla",
					reply_to: user_email,
					to_email: "saicharannancharla1@gmail.com",
					email_id :user_email,
					message: user_message,
				},
				EMAIL_JS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					toast.success("Message sent successfully!", {
						position: 'bottom-right',
					});
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);
					toast.error("Uh, oh! Something went wrong. Please try again later.", {
						position: 'bottom-right',
					});
				}
			);
	};

	return (

        <div className='contact-card'>   
			
				<div className='internal-card' >
					
					<div className="reach-out-box">
					<h2 className='font-light'>REACH OUT TO ME</h2>
					</div>
					
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className='form-card'
					>
						<label className='field'>
							{/* <span className='label-title'>Your Name</span> */}
							<input
								type='text'
								name='name'
								value={form.name}
								onChange={handleChange}
								placeholder="Enter your name"
								className='name-box'
								required
							/>
						</label>
						<label className='field'>
							{/* <span className='label-title'>Your email</span> */}
							<input
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
								placeholder="Enter your Email"
								className='email-box'
								required
							/>
						</label>
						<label className='field'>
							<span className='label-title'>Your Message</span>
							<textarea
								rows={7}
								name='message'
								value={form.message}
								onChange={handleChange}
								placeholder='  Do you have anything to say?'
								className='text-area'
								required
							/>
						</label>

						<button
							type='submit'
							className='submit-button'
						>
							{loading ? "Sending..." : "Send"}
						</button>
					</form>
				</div>
				<ToastContainer />
			
		<Footer/>
        </div>
	);
};

export default Contact;