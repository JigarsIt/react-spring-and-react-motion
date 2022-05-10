import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderNavbar from "../../components/nav-bar";
import ProgressBar from "../../components/progress-bar";
import ToggleExample from "../toggle-example";
import LoopExample from "../loop-example";

const Home = () => {
  return (
    <Router>
      <HeaderNavbar />
      <Routes>
        <Route exact path="/" element={<ProgressBar />} />
        <Route exact path="/ex1" element={<ProgressBar />} />
        <Route exact path="/ex2" element={<LoopExample />} />
        <Route exact path="/ex3" element={<ToggleExample />} />
      </Routes>
    </Router>
  );
};

export default Home;
