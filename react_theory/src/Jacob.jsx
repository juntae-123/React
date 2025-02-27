const Jacob = (props) => {
  return (
    <dl
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <dd>{props.num}</dd>
      <dt>{props.name} </dt>
    </dl>
  );
};

export default Jacob;
