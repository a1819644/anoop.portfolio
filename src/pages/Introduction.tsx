import "bootstrap/dist/css/bootstrap.css";
import "../styles/IntroductionStyles.css";
import profilePicture from "../assets/profilePicture.webp";
const Introduction = () => {
  return (
    <div className="container introduction">
      <div className="col">
        <h1>Anoop Kumar Kushwaha</h1>
        <p>
          I’m a Software Developer with over 8 months of professional experience
          working on production web applications. I hold a Master’s degree in
          Computer Science from the University of Adelaide, where I gained
          research experience in computer vision. I enjoy building scalable,
          user-focused solutions, writing clean and maintainable code, and
          learning through real-world software development.
        </p>
        <img
          src={profilePicture}
          alt="Anoop Kumar Kushwaha"
          width="auto"
          height="300"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default Introduction;
