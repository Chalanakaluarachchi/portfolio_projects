import React from "react";
import about from "../assets/11.png";

const About = () => {
  return (
    <div
      className="text-white max-w-[1200px] mx-auto my-12 h-[600px]"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex  ">
          <div className="my-auto mx-6">
            <h2
              className="text-4xl font-bold mb-4 primary"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              About Me
            </h2>
            <p
              className="text-base lg:text-lg"
              data-aos="zoom-in"
              data-aos-duration="1600"
            >
              A highly motivated and adaptable individual with a strong
              foundation in Information Technology and a passion for
              user-centered design. Holding an Advanced Level qualification in
              the Technology stream, an HND in Information Technology, and
              additional certifications in UI/UX design and frontend web
              development, I am eager to contribute to the creation of intuitive
              digital experiences. With a comprehensive skill set in teamwork,
              leadership, time management, and critical thinking, I am
              well-equipped to collaborate effectively in fast-paced
              environments. My proficiency in public relations and effective
              communication further complements my ability to work
              cross-functionally and deliver innovative solutions. Looking to
              leverage my technical expertise and design sensibilities in a
              dynamic UI/UX Designer, Web Developer, or Frontend Developer role.
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={about}
          width={300}
          height={300}
          data-aos="fade-right"
          data-aos-duration="1600"
        />
      </div>
    </div>
  );
};

export default About;
