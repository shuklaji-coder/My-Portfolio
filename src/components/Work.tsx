import "./styles/Work.css";
import WorkImage from "./WorkImage";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              title: "AI-Powered Sasta Bazzar",
              category: "Full Stack Multi-Vendor E-Commerce",
              tools: "React, Spring Boot, Spring Security, JWT Auth, MySQL, Spring AI, REST API",
              link: "https://sastaabazaar.shop/",
              image: "/images/sasta_bazaar_cover.png",
              video: "/images/sasta_bazaar.mp4"
            },
            {
              title: "GhostPay",
              category: "Zero-Signal Payment Network",
              tools: "React, Node.js, Express, Docker, REST API, Render",
              link: "https://ghostpay-nd41.onrender.com/",
              image: "/images/ghostpay_cover.png",
              video: undefined
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} video={project.video} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
