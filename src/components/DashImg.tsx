import CategorySection from "./CategorySection";
import data from "../assets/data.json";

function MainImg() {
  return (
    <div className="main-div-layer">
      <img src="src/assets/main_movie.jpg" className="w-100" alt="Image" />
      <div className="blur-border-layer main-layer-position"></div>
      <div className="main-layer-position">
        <CategorySection
          id={0}
          name={data.movies[0].titleName!}
          imgList={data.movies[0].imgs!}
        ></CategorySection>
      </div>
    </div>
  );
}

export default MainImg;
