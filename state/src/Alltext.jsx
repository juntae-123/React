const Alltext = (props) => {
  const { text } = props;
  return (
    <article style={{ display: "flex" }}>
      <span
        style={{
          color: "gray",
          fontSize: "30px",
          display: "flex",
        }}
      >
        {text}
      </span>
    </article>
  );
};

export default Alltext;
