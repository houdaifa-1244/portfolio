import React, { useState } from "react";
import canva from '../assets/image/icons8-canva-48.png'
import { motion } from "framer-motion";


const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experienceData = [
   
  ];

  const educationData = [
    { year: "2024 - 2026", title: "Full-Stack Development", company: "ISTA Teatouan Park" },
    { year: "2023 - 2024", title: "Science Physique", company: "Abde Lmalik Saidi University" },
    { year: "2022 - 2023", title: "Bacaluaraint", company: "Mehdi Benouna" },
  ]

  const skillsData = [
    { name: "HTML", icon: "ri-html5-fill" },
    { name: "CSS", icon: "ri-css3-fill" },
    { name: "JavaScript", icon: "ri-javascript-fill" },
    { name: "React.js", icon: "ri-reactjs-line" },
    { name: "Tailwind.css", icon: "ri-tailwind-css-fill" },
    { name: "Bootstrap", icon: "ri-bootstrap-fill" },
    { name: "Angular", icon: "ri-angularjs-fill" },
    { name: "Node.js", icon: "ri-nodejs-line" },
    { name: "Java", icon: "ri-java-line" },
    { name: "PHP", icon: "ri-php-fill" },
    { name: "Laravel", icon: "fa-brands fa-laravel" },
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "MongoDB", icon: "ri-database-2-fill" },
    { name: "MySQL", icon: "ri-database-2-fill" },
    { name: "Docker", icon: "fa-brands fa-docker" },
    { name: "N8N", icon: "" },
    { name: "Git", icon: "ri-github-fill" },
    { name: "CI/CD", icon: "ri-git-pull-request-fill" },
  ];

  return (
    <section className="resume">
      <h2 className="section__title">Resume</h2>

      {/* Tabs */}
      <div className="tabs">
        <span
          className={activeTab === "experience" ? "active" : ""}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </span>
        <span
          className={activeTab === "skills" ? "active" : ""}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </span>
        <span
          className={activeTab === "education" ? "active" : ""}
          onClick={() => setActiveTab("education")}
        >
          Education
        </span>
      </div>

      {/* Animated Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="content"
      >
        {/* EXPERIENCE */}
        {activeTab === "experience" && (
          <div className="gridd">
            {experienceData.length === 0 ? (
              <p className="no-data">No experience yet</p>
            ) : (
              experienceData.map((item, i) => (
                <motion.div
                  className="card"
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="year">{item.year}</p>
                  <br />
                  <h3>{item.title}</h3>
                  <br />
                  <p className="company">• {item.company}</p>
                </motion.div>
              ))
            )}
          </div>
        )}

        {/* EDUCATION */}
        {activeTab === "education" && (
          <div className="gridd">
            {educationData.map((item, i) => (
              <motion.div
                className="card"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="year">{item.year}</p>
                <br />
                <h3>{item.title}</h3>
                <br />
                <p className="company">• {item.company}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* SKILLS */}
        {activeTab === "skills" && (
          <div className="gridd skills">
            {skillsData.map((skill, i) => (
              <motion.div
                className="skill-card"
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="icon"><i className={skill.icon}></i></div>
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Resume;