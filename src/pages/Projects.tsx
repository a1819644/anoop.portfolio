import "../styles/Projects.css";
import Securewrap from "../assets/projects/securewraphd.gif";
import nubevestai from "../assets/projects/nubevestaihd.gif";
import aiImageTagger from "../assets/projects/ai-image-tagger.gif";
const Projects = () => {
  return (
    <div className="container">
      <div className="Projects">
        <h1>Projects</h1>
        <p>Have a look at some of the rolled-out projects I'm proud of:</p>
        <div className="row d-flex flex-column flex-md-row justify-content-between Projects-stack">
          <div className="col pic ">
            <img src={nubevestai} alt="" className="img-fluid" />
          </div>
          <div className="col text-card pb-3 pb-md-2">
            <h2 className="mt-6 mt-md-0"> Nubevest AI</h2>
            <p>
              AI-powered chat platform built with React and Node.js, integrating
              the Gemini API for real-time natural language processing. Features
              secure authentication, image generation(<strong>0.5s</strong>),
              multi-format document processing (<strong>up to 25MB</strong>),
              and real-time <strong>data syncing</strong> across devices.
              Engineered to handle <strong>1,000</strong> concurrent users with
              low-latency responses, ensuring a seamless experience under high
              load.
            </p>
            <a
              href="https://ai.nubevest.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="row d-flex flex-column flex-md-row justify-content-between Projects-stack-2">
          <div className="col text-card pb-3 pb-md-2">
            <h2 className="mt-6 mt-md-0">Securewrap</h2>
            <p>
              A full-stack eCommerce platform managing 50+ products. Implemented
              a custom <strong>Stripe</strong> payment gateway integration for
              secure transactions. Optimized <strong>MongoDB</strong> queries
              for fast product filtering and reliable inventory management.
            </p>
            <a
              href="https://securewrap.com.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
          <div className="col pic ">
            <img src={Securewrap} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row d-flex flex-column flex-md-row justify-content-between Projects-stack-3">
          <div className="col pic ">
            <img src={aiImageTagger} alt="" className="img-fluid" />
          </div>
          <div className="col text-card pb-3 pb-md-2">
            <h2 className="mt-6 mt-md-0">AI-Powered Image Taggger for SEO</h2>
            <p>
              Built a client-side automation tool using <strong>React</strong>{" "}
              and <strong>Gemini Vision</strong>
              AI. Engineered a batch processing pipeline that automates metadata
              tagging and HEIC conversion, reducing manual{" "}
              <strong>workflows by 90%</strong>. Implemented complex file
              handling with the Canvas API.
            </p>
            <a
              href="https://a1819644.github.io/ai-image-tagger/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="githubButton">
          <h4>Check out, my daily coding feeds here</h4>
          <button type="button" className="btn">
            <a
              href="https://github.com/a1819644"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
