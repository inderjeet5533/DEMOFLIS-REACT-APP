import { useState } from "react";
import CardScroller from "./CardScroller";

function CategorySection() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <div className="pl-4">
        <h4 className="fw-bold text-white">Ensemble TV Shows</h4>
      </div>
      <div
        className="flex-container"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <CardScroller isShown={isShown}></CardScroller>
      </div>
    </div>
  );
}

export default CategorySection;
