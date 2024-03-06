import Card from "./Card";

interface Props {
  isShown: boolean;
}

function CardScroller({ isShown }: Props) {
  return (
    <>
      {isShown ? (
        <div className="asd start-0">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </div>
      ) : (
        ""
      )}
      <div className="flex-container">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      {isShown ? (
        <div className="asd end-0">
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
