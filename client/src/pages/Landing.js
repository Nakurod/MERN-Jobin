import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from "../components"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/*info*/}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby jean shorts raclette pickled health goth, aesthetic salvia
            swag ascot. Mixtape bodega boys XOXO kogi butcher truffaut glossier
            beard freegan live-edge tattooed shabby chic mumblecore. Kombucha
            thundercats art party fashion axe. Polaroid gentrify chicharrones
            knausgaard, YOLO DSA fingerstache cronut mlkshk photo booth pickled
            retro.
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
