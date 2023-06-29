import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return <div className="container">
    <Link className="link" to={"/NFL"}>NFL</Link>
    <Link className="link" to={"/NBA"}>NBA</Link>
  </div>;
};
export default Home;
