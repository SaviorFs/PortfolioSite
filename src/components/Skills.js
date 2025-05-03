import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython,
  FaDocker, FaAws, FaLinux, FaGithub as FaGithubIcon, FaExternalLinkAlt
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiUnity, SiMysql, SiCsharp, SiFirebase } from 'react-icons/si';
import { DiCode } from 'react-icons/di';

const skills = [
  {
    icon: <FaHtml5 />,
    name: "HTML",
    description: "Structured layout and content for responsive web apps.",
    color: "bg-red-500",
    project: "Healthcare Web App",
    link: "https://github.com/SaviorFs/HealthcareWebApp"
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS",
    description: "Styled responsive UI components using modern design techniques.",
    color: "bg-blue-500",
    project: "Portfolio Website",
    link: "https://github.com/SaviorFs/PortfolioSite"
  },
  {
    icon: <IoLogoJavascript />,
    name: "JavaScript",
    description: "Dynamic logic for client-side interactions and dashboard rendering.",
    color: "bg-yellow-500",
    project: "Arduino Temp Monitor",
    link: "https://github.com/SaviorFs/Arduino-Based-Smart-Temperature-Monitoring-System"
  },
  {
    icon: <FaReact />,
    name: "React.js",
    description: "Developed dynamic dashboards and multi-page frontends.",
    color: "bg-teal-500",
    project: "Healthcare Web App",
    link: "https://github.com/SaviorFs/HealthcareWebApp"
  },
  {
    icon: <FaJava />,
    name: "Java",
    description: "Built socket servers and analyzers for real-time systems.",
    color: "bg-purple-500",
    project: "Network Intrusion System",
    link: "https://github.com/SaviorFs/Network-Intrusion-System"
  },
  {
    icon: <FaPython />,
    name: "Python",
    description: "Used for data processing, scripting, and experimentation.",
    color: "bg-green-500",
    project: "Algorithm Analyzer",
    link: "https://github.com/SaviorFs/Algorithm-Complexity-Microservices"
  },
  {
    icon: <DiCode />,
    name: "C / C++",
    description: "Used in Arduino for embedded control and sensor integration.",
    color: "bg-indigo-600",
    project: "Arduino Temp Monitor",
    link: "https://github.com/SaviorFs/Arduino-Based-Smart-Temperature-Monitoring-System"
  },
  {
    icon: <FaDocker />,
    name: "Docker",
    description: "Containerized microservices and full-stack apps for local and CI.",
    color: "bg-gray-500",
    project: "Algorithm Analyzer",
    link: "https://github.com/SaviorFs/Algorithm-Complexity-Microservices"
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
    description: "Learned relational modeling, SQL queries, and schema design.",
    color: "bg-pink-500",
    project: "Taught in Database Management Systems I & II at WKU",
    link: "https://catalog.wku.edu/undergraduate/course-descriptions/cs/" 
  }
  ,
  {
    icon: <SiCsharp />,
    name: "C#",
    description: "Game logic and backend in early Unity projects.",
    color: "bg-green-700",
    project: "Taught in Game Programming at WKU",
    link: "https://catalog.wku.edu/undergraduate/course-descriptions/cs/"
  },
  {
    icon: <FaAws />,
    name: "AWS",
    description: "Basic experience with EC2 and deployment environments. Certified in cloud fundamentals.",
    color: "bg-orange-500",
    project: "AWS Certified Cloud Practitioner",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/88602dd11db142089af5fce495de8723"
  },
  
  {
    icon: <FaLinux />,
    name: "Unix/Linux",
    description: "Used in development, testing, and server environments.",
    color: "bg-red-700",
    project: "Network Intrusion System",
    link: "https://github.com/SaviorFs/Network-Intrusion-System"
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
    description: "Realtime DB and auth for alerts, logs, and dashboards.",
    color: "bg-orange-400",
    project: "Network Intrusion System",
    link: "https://github.com/SaviorFs/Network-Intrusion-System"
  },
  {
    icon: <FaGithubIcon />,
    name: "GitHub Actions",
    description: "CI workflows for testing and deploying full-stack apps.",
    color: "bg-slate-300",
    project: "Arduino Temp Monitor",
    link: "https://github.com/SaviorFs/Arduino-Based-Smart-Temperature-Monitoring-System"
  },
  {
    icon: <SiUnity />,
    name: "Unity",
    description: "Used Unity with C# for building 2D/3D interactive environments and gameplay logic.",
    color: "bg-purple-900",
    project: "Taught in Game Programming at WKU",
    link: "https://catalog.wku.edu/undergraduate/course-descriptions/cs/" 
  }
  
];

const Skills = () => {
  return (
    <section id="skills" className="text-gray-700 body-font bg-green-100 pt-8 pb-24">
      <div className="container px-0 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">Skills</h1>
          <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Technologies and tools I've used in real-world software projects.
          </p>
          <p className="text-sm text-gray-600 italic mt-3 mx-auto xl:w-2/4 lg:w-3/4 border-l-4 border-blue-400 pl-4">
          Note: Hovering over a skill box will display a brief overview on how I use this skill. Clicking on a link on a skill box will direct you to a Github repo where I used that skill or to WKU's Computer Science Course catalog.
</p>
        </div>
        <div className="bg-green-200 rounded-lg shadow-lg p-2">
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-center">
            {skills.map((skill) => (
              <div key={skill.name} className="p-4 sm:w-1/3 md:w-1/4 lg:w-1/5">
                <div className={`relative flex flex-col items-center justify-center h-40 rounded-lg p-4 ${skill.color} group`}>
                  <div className="flex flex-col items-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                    {skill.icon}
                    <span className="title-font font-medium text-white mt-2">{skill.name}</span>
                  </div>
                  <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out px-3 text-center text-white text-xs">
                    {skill.description}
                  </p>
                </div>
                <div className="text-center mt-2 text-sm">
                  <a
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline flex items-center justify-center gap-1"
                  >
                    Used in: {skill.project} <FaExternalLinkAlt size="0.8em" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
