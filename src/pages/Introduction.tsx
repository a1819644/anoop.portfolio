import "bootstrap/dist/css/bootstrap.css";
import "../styles/IntroductionStyles.css";
import profilePicture from "../assets/profilePicture.webp";
const Introduction = () => {
  return (
    <div className="container introduction">
      <div className="col">
        <h1>Anoop Kumar Kushwaha</h1>
        <p>
          A recent Master's graduate from the University of Adelaide, I am
          seeking a full-time role in Software Development, Web Development, or
          AI. Eager to apply my academic knowledge and research skills, I aim to
          contribute to innovative projects while continuously learning and
          growing in a dynamic environment.
        </p>
        <img
          src={profilePicture}
          alt=""
          width="auto"
          height="300"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default Introduction;
