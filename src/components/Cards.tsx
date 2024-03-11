import { forwardRef } from "react";
import Card from "./Card";

interface ImgList {
  imgList: Array<string>;
}

const dataCard = (imgs: Array<string>) =>
  imgs.map((img, index) => {
    return <Card id={index} img={img}></Card>;
  });

const Cards = forwardRef(({ imgList }: ImgList, ref) => {
  return (
    <div
      className="flex-container pl-4"
      ref={ref}
      onScroll={() => console.log(123)}
    >
      {dataCard(imgList)}
    </div>
  );
});

export default Cards;
