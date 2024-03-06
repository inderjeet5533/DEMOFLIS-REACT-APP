import CategorySection from "./CategorySection";

function MainImg() {
  return (
    <div className="main-div-layer">
      <img src="src/assets/main_movie.jpg" className="w-100" alt="Image" />
      <div className="blur-border-layer main-layer-position"></div>
      <div className="main-layer-position">
        <CategorySection></CategorySection>
      </div>
    </div>
  );
}

export default MainImg;
