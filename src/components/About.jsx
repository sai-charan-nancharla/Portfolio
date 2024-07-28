import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';
import "../index.css"
import "../App.css"

const ServiceCard = ({ service }) => (
  
  <div className="skills">
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
          style={{ background: '#151030' }}
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
  </div>
);

const About = () => {
  return (
   
      <div>
      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>Hello, I'm Sai Charan Nancharla, a 2024 graduate🎓 with a passion for crafting robust backend systems and captivating web applications. As a Data Science student, I have knowledge and worked on Machine Learning .
              <br />
              Beyond coding, I love to exploring new inventions in the world and helping the college and school students to complete their pprojects.
              On a different note, I'm also into photography. It's not just a hobby; I see it as a way to capture moments 📷, tell stories.</p>

            <div className="resume">
            <ButtonLink
              url='https://drive.google.com/file/d/12f-BetJl2jTEd9VDfrFdE3Eb85duUjHx/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />
            </div>

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;