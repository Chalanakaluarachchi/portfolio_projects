import React from 'react';
import { FaSquareFacebook, FaSquareInstagram ,FaSquareGithub  } from "react-icons/fa6";
import { FaLinkedin, FaYoutube, FaTwitterSquare } from "react-icons/fa";

const Social = ({Cstyle}) => {
  const socialMedia = [
    { icon: <FaSquareFacebook className='text-[#316FF6] w-8 h-8 ' />, path: "https://www.facebook.com/profile.php?id=61551848351716&mibextid=ZbWKwL" },
    { icon: <FaSquareInstagram className='bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] w-8 h-8 ' />, path: "https://www.instagram.com/chalana_ravishka?igsh=MTU2dndzcmdvaGQzcA==" },
    { icon: <FaLinkedin  className='text-[#0077b5] w-8 h-8 '/>, path: "https://www.linkedin.com/in/chalana-kaluarachchi-688734211/" },
    { icon: <FaYoutube  className='text-[#FF0000] w-9 h-9 '/>, path: "" },
    { icon: <FaTwitterSquare className='text-[#1C9CEA] w-8 h-8 ' />, path: "" },
    { icon: <FaSquareGithub  className='text-white w-8 h-8 ' />, path: "https://github.com/Chalanakaluarachchi" },
  ];

  return (
    <div className={Cstyle} data-aos="fade-right" data-aos-duration='1600'>
      {socialMedia.map((social, index) => (
        
        <a key={index} href={social.path} target="_blank" rel="noopener noreferrer" >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export default Social;
