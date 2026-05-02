import Marquee from "react-fast-marquee";
import { 
  FaJava, 
  FaReact,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";
import { 
  SiSpringboot,
  SiTypescript,
  SiJavascript,
  SiThreedotjs,
  SiMongodb,
  SiMysql
} from "react-icons/si";
import "./styles/SkillsMarquee.css";

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Three.js", icon: <SiThreedotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
];

const SkillsMarquee = () => {
  return (
    <div className="skills-marquee-section">
      <div className="skills-header">
        <h2>My Skills</h2>
        <p>Modern Applications | Modern Technologies</p>
      </div>
      <Marquee
        gradient={true}
        gradientColor="rgba(0, 0, 0, 0.5)"
        speed={50}
        pauseOnHover={true}
        className="skills-marquee"
      >
        {skills.concat(skills).map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillsMarquee;
