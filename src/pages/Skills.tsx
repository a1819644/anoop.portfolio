import "../styles/Skills.css";
import backendSvg from "../assets/skills/backend.png";
import frontend from "../assets/skills/frontend.png";
import designer from "../assets/skills/designer.png";

const Skills = () => {
  return (
    <>
      <div className="skills">Skills</div>
      <div className="container stacks">
        <div className="row justify-content-center g-0">
          {/* Backend Skill */}
          <div className="col techStacks techStacks-backend">
            <div className="col">
              <img src={backendSvg} alt="backend-logo" className="img-fluid" />
              <h2>Back-end Developer</h2>
              <p>
                Develop business logic and back-end system to support the
                product, create API, have vast experience with version control
                systems.
              </p>
              <h4>Languages:</h4>
              <p>Python, Java, Typescript</p>
              <h4>My Tools:</h4>
              <ul>
                <li>MySQL</li>
                <li>AWS</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>

          {/* Frontend Skill */}
          <div className="col techStacks techStacks-frontend">
            <div className="col">
              <img src={frontend} alt="frontend-logo" className="img-fluid" />
              <h2>Front-end Developer</h2>
              <p>
                Develop user interfaces and ensure a seamless experience for the
                end-users. Have vast experience with frameworks and version
                control systems.
              </p>
              <h4>Technologies Stack:</h4>
              <p>HTML, JavaScript, Slim, CSS</p>
              <h4>My Tools:</h4>
              <ul>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Vue</li>
                <li>Github</li>
              </ul>
            </div>
          </div>

          {/* Designer Skill */}
          <div className="col techStacks techStacks-designer">
            <div className="col">
              <img src={designer} alt="designer-logo" className="img-fluid" />
              <h2>Designer</h2>
              <p>
                Design user experiences, interfaces, and mobile apps, ensuring
                great usability and visual appeal.
              </p>
              <h4>Things I Do:</h4>
              <p>UX, UI, Web, Mobile, Apps</p>
              <h4>My Tools:</h4>
              <ul>
                <li>Figma</li>
                <li>Sketch</li>
                <li>Spline</li>
                <li>InVision</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
