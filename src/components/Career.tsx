import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>full stack developer Internship</h4>
                <h5>Sdac infotech (Mumbai)</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Developed and maintained web applications using Java, Spring Boot, JavaScript, React, HTML, and CSS.
              Designed responsive user interfaces and built RESTful APIs for seamless frontend-backend communication.
              Improved application performance through debugging and clean coding practices while collaborating with the developement team to deliver scalable software solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech</h4>
                <h5>Thakur College of Engineering</h5>
              </div>
              <h3>2024 - 2027</h3>
            </div>
            <p>
              CGPA: 8.26. Winner – Internal Smart India Hackathon (SIH) Hackathon, college-level competition.
              Finalist – Mumbai Hacks 2025 Hackathon. Actively participated in technical events and hackathons.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma</h4>
                <h5>Thakur Polytechnic</h5>
              </div>
              <h3>2021 - 2024</h3>
            </div>
            <p>
              CGPA: 8.14. Organized and managed college events. Coordinated with teams for seamless execution.
              Handled event planning and logistics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
