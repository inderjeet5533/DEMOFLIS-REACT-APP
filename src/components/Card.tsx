interface Props {
  id: number;
  img: String;
}

function Card({ id, img }: Props) {
  return (
    <div className="d-inline px-1" key={id}>
      <img
        className="rounded-1"
        src={"src/assets/" + img}
        alt="sports"
        width="260"
        height="150"
      ></img>
    </div>
  );
}

export default Card;
