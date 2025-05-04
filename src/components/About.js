import React, { useEffect, useState } from 'react';
import johnGahaganPic from '../assets/images/johngahaganpic.jpg';
import John_Gahagan_Resume from '../assets/John_Gahagan_Resume.pdf';
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from 'react-icons/fa';

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayedText}</span>;
};

const About = () => {
  return (
    <section id="about" className="text-gray-700 body-font bg-gray-100 py-24 pt-24">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <div className="overflow-hidden h-[26rem] w-[26rem] mx-auto shadow-xl">
            <img className="object-cover object-center h-full w-full" src={johnGahaganPic} alt="John Gahagan" />
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900">
            <TypingText text="H.ello, I'm John Gahagan" />
          </h1>
          <p className="mb-6 leading-relaxed text-lg max-w-3xl">
            I am a Computer Science student at Western Kentucky University with experience in embedded systems, software engineering, and quality assurance. Some of my projects include a real-time Arduino-based temperature monitoring system using WebSocket and Firebase, a Java-based network intrusion detection system, a containerized algorithm complexity analyzer with microservices, and a CI/CD-enabled healthcare web application.
          </p>
          <p className="mb-6 leading-relaxed text-lg max-w-3xl">
            I have worked with a variety of technologies including C++, Java, Node.js, Docker, Firebase, and GitHub Actions. I am passionate about building robust and efficient systems, whether embedded or full-stack. I am currently looking for opportunities where I can continue learning and contribute to meaningful software projects.
          </p>
          <div className="flex justify-center md:justify-start mt-4">
            <a href="https://linkedin.com/in/john-gahagan-aa99a91b7/" target="_blank" rel="noopener noreferrer" className="mr-4 text-gray-600 hover:text-blue-600">
              <FaLinkedin size="2em" />
            </a>
            <a href="mailto:john.gahagan3@gmail.com" className="mr-4 text-gray-600 hover:text-red-600">
              <FaEnvelope size="2em" />
            </a>
            <a href="https://leetcode.com/JohnGahagan/" target="_blank" rel="noopener noreferrer" className="mr-4 text-gray-600 hover:text-green-600">
              <FaCode size="2em" />
            </a>
            <a href="https://github.com/saviorfs" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <FaGithub size="2em" />
            </a>
          </div>
          <div className="mt-6">
            <a href={John_Gahagan_Resume} download className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded shadow">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
