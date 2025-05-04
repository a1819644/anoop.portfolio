
import Ai from "../assets/Achievements/Ai.png";
import Awwward from "../assets/Achievements/Awwward.png";
import Freelance from "../assets/Achievements/Freelance.png";
import Hackathon from "../assets/Achievements/Hackathon.png";

const Achievements = () => {
  return (
    <>
      <div className="contianer skills">Achievements</div>
      <div className="container stacks">
        <div className="row justify-content-center ">
          <div className="col techStacks techStacks-backend">
            <img src={Awwward} alt=" frontend-logo" />
            <div className="col">
              <h2>TechIt</h2>
              <p>
                Employee of the month. Though I was only an intern, I was highly
                praised at work and given promotion.
              </p>
            </div>
          </div>
          <div className="col techStacks techStacks-frontend">
            <div className="col">
              <img src={Hackathon} alt=" frontend-logo" />
              <h2>Hackathon</h2>
              <p>
                DeveloperWeek 2020 Hackathon. This was an incredible experience
                creating the whole project in 24 hours.
              </p>
            </div>
          </div>
          <div className="col techStacks techStacks-designer">
            <div className="col">
              <img src={Freelance} alt=" Awwwards" />
              <h2>Awwwards</h2>
              <p>
                Honorable mention. Being noticed means much to me and my client
                for whom the site was developed.
              </p>
            </div>
          </div>
          <div className="col techStacks techStacks-designer">
            <div className="col">
              <img src={Ai} alt="Ai" />
              <h2>Reasearch AI(CNN & NLP)</h2>
              <p>
                Develop video classification logic and model for generating captions. Recieved High Distinction. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
