import React from 'react'
import { FaSquareFacebook, FaSquareInstagram ,FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin, FaYoutube, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  const socialMedia = [
    { icon: <FaSquareFacebook className='text-white w-5 h-5' />, path: "https://www.facebook.com/profile.php?id=61551848351716&mibextid=ZbWKwL" },
    { icon: <FaSquareInstagram className='text-white w-5 h-5' />, path: "https://www.instagram.com/chalana_ravishka?igsh=MTU2dndzcmdvaGQzcA==" },
    { icon: <FaLinkedin className='text-white w-5 h-5' />, path: "https://www.linkedin.com/in/chalana-kaluarachchi-688734211/" },
    { icon: <FaYoutube className='text-white w-5 h-5' />, path: "https://www.youtube.com" },
    { icon: <FaTwitterSquare className='text-white w-5 h-5' />, path: "" },
    { icon: <FaSquareGithub className='text-white w-5 h-5' />, path: "https://github.com/Chalanakaluarachchi" },
  ];

  return (
    <div className='max-w-[1200px] p-6 sm:p-12 flex flex-col sm:flex-row justify-between items-center sm:items-start mx-auto'>
      <span className='primary text-center sm:text-left'>
        <a href='/home'>CHALANA RAVISHKA</a>
      </span>

      <div className='flex gap-6 mt-6 sm:mt-0 sm:mb-0 '>
        {socialMedia.map((social, index) => (
          <a key={index} href={social.path} target="_blank" rel="noopener noreferrer">
            {social.icon}
          </a>
        ))}
      </div>

      <p className='text-gray-600 text-center sm:text-right mt-6 sm:mt-0'>
        chalanaravishka2@gmail.com
      </p>
    </div>
  )
}

export default Footer
