import { useState } from "react";
import CategorySection from "./components/CategorySection";
import MainImg from "./components/DashImg";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  window.addEventListener("scroll", onScrollHandler);
  const [style, setStyle] = useState("menu-panel-transparent");

  function onScrollHandler() {
    var scroll_pos = window.scrollY;
    if (scroll_pos > 0) {
      setStyle("menu-panel-black");
    } else {
      setStyle("menu-panel-transparent");
    }
  }

  return (
    <>
      <div className="position-relative">
        <NavBar style={style}></NavBar>
        <MainImg></MainImg>
      </div>
      <div>
        <CategorySection></CategorySection>
        <CategorySection></CategorySection>
        <CategorySection></CategorySection>
        <CategorySection></CategorySection>
      </div>
    </>
  );
}

export default App;
