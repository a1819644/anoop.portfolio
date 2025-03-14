import "../styles/HeaderStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import ResumePDF from "../assets/Anoop_resume.pdf";
const Header = () => {
  return (
    <nav className="navbar navbar-expand">
      <a className="navbar-brand disable">A.K</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-item nav-link" href="#introduction">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-item nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-item nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-item nav-link" href="#experience">
              Experiences
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-item nav-link" href="#achievements">
              Achievements
            </a>
          </li>
          <li className="nav-item active">
            <button className="btn btn-outline-primary">
              <a className="nav-item nav-link" href={ResumePDF}>
                Resume
              </a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
