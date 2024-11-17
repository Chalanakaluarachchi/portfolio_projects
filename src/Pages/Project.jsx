import React, { useState } from 'react';
import project from '../assets/cricket.mp4';
import project2 from '../assets/admin.mp4';
import project3 from '../assets/gem.mp4';
import project4 from '../assets/scroll.mp4';
import project5 from '../assets/food.mp4';
import project6 from '../assets/lanka.mp4';
import project7 from '../assets/design.png';


import { FaGithub } from "react-icons/fa";

const Project = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      video: project,
      description: "The Lions Cricket Club Management System is a streamlined platform for managing cricket club activities. Admins can add coaches, update memberships, and schedule events. Students can enroll in classes, pay fees, and view events, while coaches manage their classes and attendance. ",
      description0: "💻Technologies Used: ",
      description1:"🔴Frontend:React JS",
      description2:"🔴Backend: Express JS, Node JS",
      description3:"🔴Database: MongoDB",
      title: "MERN Cricket Club Management System",
      link: "https://github.com/Chalanakaluarachchi/Lions-Cricket-Club",
      Count:"01",
    },
    {
      video: project3,
      description: "A GEMS Web Application (Frontend)",
      description0:"💻Technologies Used:  ",
      description2:"🔴Next js,TypeScript and TailwindCss",
      title: "Gems Web Application  (Frontend)",
      link: "https://github.com/Mayuru0/Portfolio-Project--React-Js---vite-.git",
      Count:"02",
    },
    {
      video: project2,
      description: "A GEMS Web Application Admin Panel (Frontend)",
      description0:"💻Technologies Used : ",
      description1:"🔴NetBeans IDE ,Next js,TypeScript and TailwindCss",
      title: "A GEMS Web Application Admin Panel  (Frontend)",
      link: "https://github.com/Mayuru0/Pos-System-java-.git",
      Count:"03",
    },

    {
      video: project4,
      description: "Scrolling Animation Website UI Design",
      description0:"💻Technologies Used : ",
      description1:"🔴Figma, Photoshop",
      title: "Scrolling Animation Website UI Design",
      Count:"04",
    },

    {
      video: project5,
      description: "Resturant Website (UI Design)",
      description0:"💻Technologies Used : ",
      description1:"🔴Figma , Photoshop",
      title: "Resturant Website (UI Design)",
      Count:"05",
    },
    {
      video: project6,
      description: "Travel Website",
      description0:"💻Technologies Used : ",
      description1:"🔴Html,CSS,JavaScript",
      title: "Travel Website",
      link: "https://github.com/Chalanakaluarachchi/Travel",
      Count:"04",
    },
    {
      image: project7,
      description: "Designing recent Logo,Fb Posts,Wedding Cards,Logo,Banner",
      description0:"💻Technologies Used : ",
      description1:"🔴Photoshop , Canva",
      title: "Designs",
      Count:"07",
    },
    
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className='max-w-[1200px] mx-auto p-5  ' >
      <div className='pb-8' data-aos="fade-in" data-aos-duration='1600'>
        <p className='text-4xl mb-3 font-bold primary' >My Projects </p>
        <p className='text-gray-400'>Check out some of my recent work</p>
      </div>

      <div className='flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6'>
        {/* Description Section */}
        <div className='flex-1 md:order-1 text-center md:text-left  '>
          <h1 className='text-4xl text-white font-extrabold' 
                data-aos="fade-right"
               data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration='1600'>
          {projects[currentProject].Count}
          </h1>
          <h3 className='text-2xl font-bold mb-4 text-white' 
                data-aos="fade-right"
               data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration='1600'>
            {projects[currentProject].title} 
          </h3>
          <div data-aos="zoom-in" data-aos-duration='1600'>
          <p className='text-gray-200 mb-1'>
            {projects[currentProject].description}
          </p>
          <p className='text-gray-200 '>
            {projects[currentProject].description0}
          </p>
          <p className='text-gray-500 ml-6'>
            {projects[currentProject].description1}
          </p>
          <p className='text-gray-500 ml-6'>
            {projects[currentProject].description2}
          </p>
          <p className='text-gray-500 ml-6'>
            {projects[currentProject].description3}
          </p>
          </div>
          <a
            href={projects[currentProject].link}
            target='_blank'
            rel='noopener noreferrer'
           
          > <div  className='border-t-4 border-gray-700 mt-2 '>
            <button className='flex items-center text-white bg-gradient-to-r scale-100 px-6 py-2 rounded-full transition duration-300 mt-2 hover:bg-gradient-to-br  from-cyan-500 to-blue-500  hover:from-cyan-700 hover:to-blue-700 '>
              View Project <FaGithub className='ml-2 scale-100' />
            </button>
            </div>
          </a>
        </div>

        {/* Media Section (Image or Video) */}
        <div className='flex-1 md:order-2'>
          <div className='relative group rounded-lg shadow-lg overflow-hidden'  data-aos="fade-up-left" data-aos-duration='1600'>
            {projects[currentProject].video ? (
              <video
                src={projects[currentProject].video}
                controls
                autoPlay
                muted
                loop
                className='w-full h-full object-cover transform group-hover:scale-110 transition duration-500'
              />
            ) : (
              <img
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                className='w-full h-full object-cover transform group-hover:scale-110 transition duration-500'
              />
            )}
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-80 transition duration-500'></div>
          </div>
        </div>
      </div>

      <div className='flex justify-between mt-8 '>
        <button
          onClick={prevProject}
          className='text-white bg-gradient-to-r  hover:bg-gradient-to-br  from-cyan-500 to-blue-500  hover:from-cyan-700 hover:to-blue-700 px-4 py-2 rounded-full transition duration-300'
        >
          Previous
        </button>
        <button
          onClick={nextProject}
          className='text-white bg-gradient-to-r  hover:bg-gradient-to-br  from-cyan-500 to-blue-500  hover:from-cyan-700 hover:to-blue-700 px-4 py-2 rounded-full transition duration-300'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Project;
