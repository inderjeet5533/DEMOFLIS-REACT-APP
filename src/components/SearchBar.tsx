import { ChangeEvent, useState } from "react";

function SearchBar() {
  const [isClicked, setIsClicked] = useState(false);
  const [inputValue, setinputValue] = useState("");

  function magnifyingGlass() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="white"
        className="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>
    );
  }

  function x() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="white"
        className="bi bi-x"
        viewBox="0 0 16 16"
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
      </svg>
    );
  }

  function onClickClose() {
    setIsClicked(false);
  }

  function onClickOpen() {
    setIsClicked(true);
  }

  function onClickClean() {
    setinputValue("");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setinputValue(e.target.value);
  }

  return (
    <div>
      {isClicked ? (
        <div className="form-control">
          <span onClick={onClickClose}>{magnifyingGlass()}</span>
          <input
            className="text-white searchBar"
            type="text"
            onChange={handleChange}
            value={inputValue}
            placeholder="Search"
            aria-label="Search"
          />
          <span onClick={onClickClean}>{x()}</span>
        </div>
      ) : (
        <span onClick={onClickOpen}>{magnifyingGlass()}</span>
      )}
    </div>
  );
}
export default SearchBar;
