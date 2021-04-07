import "./App.css";
import Card from "./Components/Card";
import ImageSlider from "./Components/ImageSlider";
import CardContainer from "./Layout/CardContainer";
import Header from "./Layout/Header";
import MasonaryLayout from "./Layout/MasonaryLayout";
import Navbar from "./Layout/Navbar";
import AdminHome from "./Pages/Admin/AdminHome";
import Panel from "./Pages/Admin/Panel";
import HomePage from "./Pages/HomePage";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className='App'>
      <Panel />
    </div>
  );
}

export default App;
