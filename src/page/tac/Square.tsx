export function Square({ value, onSquareClick }) {
  // <button className="square" onClick={onSquareClick}>
  //   {value}
  // </button>;

  return (
    <div
      className="square"
      style={{
        height: 21,
        width: 20,
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onSquareClick}
    >
      {value}
    </div>
  );
}
