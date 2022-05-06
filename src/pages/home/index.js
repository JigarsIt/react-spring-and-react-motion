import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderNavbar from "../../components/nav-bar";
import ProgressBar from "../../components/progress-bar";
import RotateBox from "../../components/rotate-box";
import CssVariable from "../../components/css-variable";
import ToggleExample from "../toggle-example";

const Home = () => {
  return (
    <Router>
      <HeaderNavbar />
      <Routes>
        <Route exact path="/" element={<ProgressBar />} />
        <Route exact path="/ex2" element={<CssVariable><RotateBox /></CssVariable>} />
        <Route exact path="/ex3" element={<ToggleExample />} />
      </Routes>
    </Router>
  );
};

export default Home;
