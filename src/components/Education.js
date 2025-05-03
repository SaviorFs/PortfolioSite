import React from 'react';

const Education = () => {
  return (
    <section id="education" className="text-gray-700 body-font bg-blue-100 py-24">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 mb-4">
            Education
          </h1>
          <p className="text-lg leading-relaxed">
            Bachelor of Science in Computer Science at Western Kentucky University
          </p>
          <p className="text-md text-gray-800 mt-2">
            Minor: Computer Information Systems
          </p>
          <p className="text-sm text-gray-600 mt-1 italic">
            Expected Graduation: May 2025
          </p>
        </div>

        <div className="w-full lg:w-[90%] mx-auto bg-white p-10 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Relevant Coursework</h2>
          <ul className="space-y-6 text-gray-800 text-base">
            <li>
              <strong>Data Structures and Algorithm Analysis (CS 421):</strong> Studied complex data structures and applied Big-O analysis, learned to solve and interpret recurrence relations.
            </li>
            <li>
              <strong>Operating Systems I (CS 425):</strong> Explored memory management, scheduling, and file systems; practiced building scheduling simulators and concurrency examples.
            </li>
            <li>
              <strong>Introduction to Computer Networks (CS 381):</strong> Learned TCP/UDP socket programming, network layers, and traffic analysis using Wireshark; built a Java-based NIDS.
            </li>
            <li>
              <strong>Software Engineering I (CS 360):</strong> Focused on SDLC phases, requirement engineering, Agile methodology, and UML design practices.
            </li>
            <li>
              <strong>Intermediate Software Project (CS 396):</strong> Developed a distributed algorithm complexity analyzer using Dockerized Java microservices and CI pipelines.
            </li>
            <li>
              <strong>Game Programming (CS 301):</strong> Built 2D games with event loops, sprite rendering, and collision logic using OOP.
            </li>
            <li>
              <strong>Computer Organization and Architecture (CS 325):</strong> Learned how hardware executes software through digital logic, instruction sets, and low-level data paths.
            </li>
            <li>
              <strong>Database Management Systems I & II (CS 351, CS 443):</strong> Designed relational databases, implemented SQL queries, and examined indexing, normalization, and NoSQL concepts.
            </li>
            <li>
              <strong>Introduction to Web Programming (CS 270):</strong> Built dynamic websites using HTML, CSS, JavaScript, and PHP with session management and form handling.
            </li>
            <li>
              <strong>Introduction to UNIX (CS 315):</strong> Practiced shell scripting, permissions, process control, and Unix utilities in bash.
            </li>
            <li>
              <strong>Programming Languages (CS 382):</strong> Surveyed multiple paradigms including procedural, functional, and object-oriented, comparing syntax and language design.
            </li>
            <li>
              <strong>Big Data with Its Applications (DATA 301):</strong> Worked on data-intensive tasks using Python and big data frameworks like MapReduce to analyze large datasets.
            </li>
            <li>
              <strong>Discrete Structures (CS 339):</strong> Covered logic, proof techniques, graph theory, and set operations foundational to computer science.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
