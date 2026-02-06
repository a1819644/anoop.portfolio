import "../styles/Skills.css";
import backendSvg from "../assets/skills/backend.png";
import frontend from "../assets/skills/frontend.png";
import designer from "../assets/skills/designer.png";

const Skills = () => {
  return (
    <>
      <div className="container container-skills">
        <div className="skills">Skills</div>
      </div>
      <div className="container stacks">
        <div className="row g-0">
          {/* Frontend Skill */}
          <div className="col techStacks techStacks-frontend">
            <img src={frontend} alt="frontend-logo" className="img-fluid" />
            <h2>Front-end Developer</h2>
            <p>
              Building responsive, pixel-perfect web applications with modern
              frameworks. I focus on smooth user interactions and clean UI
              architecture.
            </p>
            <h4>Tech Stack:</h4>
            <p>
              React.js, Vue.js, HTML5, CSS3, JavaScript, Tailwind, Bootstrap
            </p>
            <h4>Dev Tools:</h4>
            <ul>
              <li>GitHub/Git</li>
              <li>Webpack</li>
              <li>VS Code</li>
              <li>NPM/Yarn</li>
              <li>Figma</li>
            </ul>
          </div>
          {/* Backend Skill */}
          <div className="col techStacks techStacks-backend">
            <img src={backendSvg} alt="backend-logo" className="img-fluid" />
            <h2>Back-end Developer</h2>
            <p>
              Architecting scalable server-side systems and APIs. Experienced in
              database management and cloud deployment.
            </p>
            <h4>Tech Stack:</h4>
            <p>Node.js, Python, Java, TypeScript</p>
            <h4>Dev Tools:</h4>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>AWS (Cloud services, basic deployments)</li>
              <li>Firebase (Auth, Firestore, Storage)</li>
              <li>Postman</li>
              <li>Git</li>
            </ul>
          </div>

          {/* Designer Skill */}
          <div className="col techStacks techStacks-designer">
            <img src={designer} alt="designer-logo" className="img-fluid" />
            <h2>AI & Systems Engineer</h2>
            <p>
              Integrating AI models into production apps and working with
              low-level system languages for performance optimization.
            </p>
            <h4>Tech Stack:</h4>
            <p>Python (Pandas/NumPy), C++, OpenAI API, Gemini, Yolo</p>
            <h4>Dev Tools:</h4>
            <ul>
              <li>Docker</li>
              <li>Apache Kafka</li>
              <li>Linux</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
