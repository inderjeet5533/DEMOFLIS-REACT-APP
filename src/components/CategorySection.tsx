import { useState } from "react";
import CardScroller from "./CardScroller";

interface TitleData {
  id: number;
  name: string;
  imgList: Array<string>;
}

function CategorySection({ id, name, imgList }: TitleData) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="margin-tb">
      <div className="pl-4">
        <h4 className="fw-bold text-white" key={id}>
          {name}
        </h4>
      </div>
      <div
        className="flex-container"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <CardScroller isShown={isShown} imgList={imgList}></CardScroller>
      </div>
    </div>
  );
}

export default CategorySection;
