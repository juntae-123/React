const Tableheader = (props) => {
  const { headerName, backgroundColor, color } = props;
  return (
    <th
      style={{
        backgroundColor,
        color,
        fontWeight: "bold",
        padding: "5px 10px",
      }}
    >
      {headerName}
    </th>
  );
};
export default Tableheader;
