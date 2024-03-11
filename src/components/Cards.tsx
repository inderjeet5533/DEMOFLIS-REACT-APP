import { forwardRef } from "react";
import Card from "./Card";

const Cards = forwardRef((props, ref) => {
  return (
    <div
      className="flex-container pl-4"
      ref={ref}
      onScroll={() => console.log(123)}
    >
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
  );
});

export default Cards;
