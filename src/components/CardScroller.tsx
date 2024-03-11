import { useRef, useState } from "react";
import Cards from "./Cards";

interface Props {
  isShown: boolean;
  imgList: Array<string>;
}

function CardScroller({ isShown, imgList }: Props) {
  const ref = useRef(null);
  const [isPrev, setIsPrev] = useState(false);

  const prev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current.children[0]).width
      );
      var scrollLeftWidth = scrollLeft - itemWidth * 5;
      ref.current.scrollLeft = scrollLeftWidth;
      if (scrollLeftWidth <= 0) {
        setIsPrev(false);
      }
    });
  };

  const next = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current.children[0]).width
      );
      var scrollLeftWidth = scrollLeft + itemWidth * 5;
      ref.current.scrollLeft = scrollLeftWidth;
      if (scrollLeftWidth > 0) {
        setIsPrev(true);
      }
    });
  };

  return (
    <>
      {isShown && isPrev ? (
        <div className="asd start-0" onClick={prev}>
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </div>
      ) : (
        ""
      )}
      <Cards imgList={imgList} ref={ref}></Cards>
      {isShown ? (
        <div className="asd end-0" onClick={next}>
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default CardScroller;
