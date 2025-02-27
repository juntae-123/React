const TableData = (props) => {
  const { data } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data.map((v) => (
        <dt> {v}</dt>
      ))}
    </div>
  );
};
export default TableData;
