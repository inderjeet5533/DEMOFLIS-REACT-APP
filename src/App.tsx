import { useState } from "react";
import CategorySection from "./components/CategorySection";
import MainImg from "./components/DashImg";
import NavBar from "./components/NavBar";
import "./App.css";
import data from "./assets/data.json";

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
      {data.movies.map((title, index) => {
        if (index >= 1) {
          return (
            <CategorySection
              id={index}
              name={title.titleName} //if item can be null so use ! like title.titleName!
              imgList={title.imgs}
            ></CategorySection>
          );
        }
      })}
    </>
  );
}

export default App;
