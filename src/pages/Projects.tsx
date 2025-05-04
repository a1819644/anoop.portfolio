import "../styles/Projects.css";
import Securewrap from "../assets/projects/securewrap.png";
import InnnovativeCaprentry from "../assets/projects/innovativeCarpentry.png";
import EzyBill from "../assets/projects/ezbills.png";
const Projects = () => {
  return (
    <div className="container">
      <div className="Projects">
        <h1>Projects</h1>
        <p>Have a look at some of the rolled-out projects I'm proud of:</p>
        <div className="row d-flex flex-column flex-md-row justify-content-between Projects-stack">
          <div className="col pic ">
            <img src={InnnovativeCaprentry} alt="" className="img-fluid" />
          </div>
          <div className="col text-card">
            <h2 className="mt-6 mt-md-0">InnovativeCarpentry</h2>
            <p>
              I developed the Innovatebuild Carpentry website, which is
              mobile-friendly and designed to handle substantial traffic. The
              site features a comprehensive portfolio, detailed service
              descriptions, client testimonials, and a blog section.
            </p>
            <a href="https://innovatebuildcarpentry.io/">View Project</a>
          </div>
        </div>
        <div className="row d-flex flex-column flex-md-row justify-content-between Projects-stack-2">
          <div className="col  pic ">
            <img src={Securewrap} alt="" className="img-fluid" />
          </div>
          <div className="col text-card">
            <h2 className="mt-6 mt-md-0">Securewrap</h2>
            <p>
              I am currently developing SecureWrap, an eCommerce website for my
              client, which features 50+ products and supports secure
              transactions for seamless shopping. The platform is designed to
              handle thousands of users efficiently, ensuring a smooth and
              reliable shopping experience.
            </p>
            <a href="https://github.com/a1819644/Securewrap">View Project</a>
          </div>
        </div>
        <div className="row d-flex flex-column flex-md-row justify-content-between Projects-stack-3">
          <div className="col pic ">
            <img src={EzyBill} alt="" className="img-fluid" />
          </div>
          <div className="col text-card">
            <h2 className="mt-6 mt-md-0">EzyBill</h2>
            <p>
              We developed this application to promote fair bill sharing among
              tenants. With over 500+ users, it enables seamless group creation,
              bill tracking with 95% accuracy, and ensures 100% transparency in
              expense sharing, reducing disputes by 40%.
            </p>
            <a href="https://github.com/a1819644/Eazy_vision-android-application-project">
              View Project
            </a>
          </div>
        </div>
        <div className="githubButton">
          <h4>Check out, my daily coding feeds here</h4>
          <button type="button" className="btn">
            <a href="https://github.com/a1819644">GitHub</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
