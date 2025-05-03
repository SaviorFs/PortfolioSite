import React from 'react';
import { FaGithub, FaFileAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Arduino-Based Smart Temperature Monitoring System",
      overview: "A real-time IoT system using Arduino Uno R4 WiFi to measure temperature and humidity, send data to a Node.js WebSocket server, and reflect threshold conditions with LED indicators.",
      technologies: "Arduino Uno R4 WiFi, DHT11 Sensor, WebSocket (ws/wss), Node.js, Firebase Realtime Database, HTML/CSS, JavaScript, Tailwind CSS, GitHub Actions",
      whatILearned: [
        "Implemented real-time WebSocket communication between Arduino and web dashboard.",
        "Controlled LEDs based on temperature thresholds stored in Firebase.",
        "Developed responsive frontend with real-time charting and dashboard views.",
        "Wrote full documentation including requirements, test cases, and GitHub Actions CI."
      ],
      githubLink: "https://github.com/SaviorFs/Arduino-Based-Smart-Temperature-Monitoring-System",
      documentation: [
        {
          label: "Software Requirements Specification",
          link: "https://github.com/SaviorFs/Arduino-Based-Smart-Temperature-Monitoring-System/blob/master/Software_Requirements_Specification_Documentation.pdf"
        },
        {
          label: "Test Plan",
          link: "https://github.com/SaviorFs/Arduino-Based-Smart-Temperature-Monitoring-System/blob/master/Testing_Documentation.pdf"
        },
        {
          label: "Software Design",
          link: "https://github.com/SaviorFs/Arduino-Based-Smart-Temperature-Monitoring-System/blob/master/Software_Design_Document.pdf"
        }
      ],
      demoLink: "https://www.youtube.com/watch?v=UR5lZHIAfG8"
    },
    {
      title: "Network Intrusion Detection System",
      description: "A real-time NIDS built with Java socket programming that monitors TCP/UDP traffic and uses Firebase for alerting and storage.",
      technologies: "Java, TCP/UDP Sockets, Firebase, Maven",
      githubLink: "https://github.com/SaviorFs/Network-Intrusion-System",
      documentationLink: "https://github.com/SaviorFs/Network-Intrusion-System/blob/main/TechnicalDocumentation.pdf",
      whatILearned: [
        "Built server-client architecture using multi-threaded Java sockets.",
        "Logged suspicious network activity to Firebase and sent alerts using UDP.",
        "Documented design decisions, threat model, and testing strategy."
      ],
      demoLink: "https://www.youtube.com/watch?v=yYmlKNE8Mic"
    },
    {
      title: "Algorithm Complexity Microservices Analyzer",
      description: "A containerized system that analyzes algorithm time complexity by solving recurrence relations across three cooperating Java microservices.",
      technologies: "Java, Docker, SparkJava, FreeMarker",
      githubLink: "https://github.com/SaviorFs/Algorithm-Complexity-Microservices",
      documentationLink: "https://github.com/SaviorFs/Algorithm-Complexity-Microservices/blob/main/TechnicalDocumentation.pdf",
      demoLink: "https://www.youtube.com/watch?v=Kigp5Ih-1J0&feature=youtu.be",
      whatILearned: [
        "Created three microservices for input processing, recurrence solving, and result rendering.",
        "Used SparkJava and FreeMarker to build a lightweight web interface.",
        "Dockerized services for isolated testing and deployment."
      ]
    },
    {
      title: "Healthcare Web App with CI/CD Pipeline",
      description: "A web-based patient tracking application with full CI/CD automation, built using Node.js, Docker, and GitHub Actions.",
      technologies: "React, Node.js, Docker, GitHub Actions, Express",
      githubLink: "https://github.com/SaviorFs/HealthcareWebApp",
      documentationLink: "https://github.com/SaviorFs/HealthcareWebApp/blob/main/TechnicalDocumentation.pdf",
      demoLink: "https://www.youtube.com/watch?v=V0WWFAZ9ue4&feature=youtu.be",
      whatILearned: [
        "Automated testing and deployment workflows using GitHub Actions.",
        "Containerized services using Docker and configured multi-service Docker Compose setup.",
        "Documented requirements, CI process, and error-handling mechanisms."
      ]
    }
  ];

  return (
    <section id="projects" className="text-gray-700 body-font bg-purple-100 pb-16 pt-24">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 mb-4">Projects</h1>
          <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            A selection of projects demonstrating my ability to apply software engineering principles in real-world systems.
          </p>
          <p className="text-sm text-gray-600 italic mt-3 mx-auto xl:w-2/4 lg:w-3/4 border-l-4 border-blue-400 pl-4">
  Note: Clicking on the GitHub icon in this section will direct you to the relevant repository. Clicking on the Docs icon will open the project's documentation. Clicking on Watch Demo will direct you to an unlisted youtube video of that project's demo.
</p>

        </div>

        <div className="flex flex-wrap -m-4 justify-center">
          {projects.map((project, index) => (
            <div key={index} className="p-4 md:w-1/2">
              <div className="bg-white shadow-lg border border-gray-200 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold title-font mb-2">{project.title}</h3>
                <p className="leading-relaxed text-base mb-3">
                  {project.description || project.overview}
                </p>
                <div className="text-indigo-500 font-medium mb-2">{project.technologies}</div>

                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 underline block mb-2"
                  >
                    Watch Demo
                  </a>
                )}

                <div className="flex justify-center gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700"
                  >
                    <FaGithub size="1.8em" />
                  </a>
                  {project.documentationLink && (
                    <a
                      href={project.documentationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700"
                    >
                      <FaFileAlt size="1.8em" />
                    </a>
                  )}
                  {project.documentation && project.documentation.length > 0 && (
                    project.documentation.map((doc, i) => (
                      <a
                        key={i}
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700"
                        title={doc.label}
                      >
                        <FaFileAlt size="1.8em" />
                      </a>
                    ))
                  )}
                </div>

                {project.whatILearned && (
                  <ul className="text-left mt-4 list-disc list-inside text-sm">
                    <span className="font-semibold text-gray-800">What I Learned:</span>
                    {project.whatILearned.map((item, i) => (
                      <li key={i} className="mt-1">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
