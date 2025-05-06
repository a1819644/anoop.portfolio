import "../styles/Experiences.css";
const Experience = () => {
  return (
    <div className="Experiences">
      <h1>Experiences</h1>
      <div className=" container col listExperiences">
        <div className="row rowNumber-1">
          <div className="col  ">
            <div className="row d-flex flex-column flex-md-row justify-content-between">
              <div className="col ">
                <h3>2021</h3>
              </div>
              <div className="col">
                <h4>Charles Sturt University</h4>
                <p>Undergraduate Project in Computer Science, A+</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row d-flex flex-column flex-md-row justify-content-between">
              <div className="col">
                <h3>2023</h3>
              </div>
              <div className="col">
                <h4>Tech It</h4>
                <p>
                  Web Developer Intern in a Australia IT company. Used Rect,
                  Node.js, and basic frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row rowNumber-2">
          <div className="col">
            <div className="row d-flex flex-column flex-md-row justify-content-between">
              <div className="col">
                <h3>2023</h3>
              </div>
              <div className="col">
                <h4>University Of Adelaide</h4>
                <p>Research Project in Computer Science and AI, A+</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row d-flex flex-column flex-md-row justify-content-between">
              <div className="col">
                <h3>2024-Pres</h3>
              </div>
              <div className="col">
                <h4>Full-stack Developer(Freelance)</h4>
                <p>Recieved great feedback from my first delivery.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row rowNumber-3">
          <div className="col">
            <div className="row d-flex flex-column flex-md-row justify-content-between">
              <div className="col">
                <h3>2021-Pres</h3>
              </div>
              <div className="col">
                <h4>Leetcode</h4>
                <p>
                  Have passed over 70+ Leetcode questions, which includes Easy,
                  Medium & Hard questions.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row d-flex flex-column flex-md-row justify-content-between">
              <div className="col">
                <h3>2021</h3>
              </div>
              <div className="col">
                <h4>UniHack Hackathon</h4>
                <p>We were able get into top 10 teams.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
