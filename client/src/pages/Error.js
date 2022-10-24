import Wrapper from "../assets/wrappers/ErrorPage";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found"></img>
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>Back home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
