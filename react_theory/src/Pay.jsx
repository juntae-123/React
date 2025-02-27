const Pay = (props) => {
  const { originalPrice, numdiscount } = props;
  const discountPrice = (originalPrice * (100 - numdiscount)) / 100;
  const krwPrice = discountPrice * 1400;
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "center",
        listStyle: "none",
        gap: "10px",
      }}
    >
      <li style={{ textDecorationLine: "line-through" }}>{originalPrice}</li>
      <li style={{ color: "red" }}>{discountPrice}</li>
      <li>{krwPrice}</li>
    </ul>
  );
};

export default Pay;
