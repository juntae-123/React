const MusinsaMainBtn = (props) => {
  const { text, passbtn } = props;
  return (
    <>
      {/* {<div onClick={passbtn ? alert("가능") : alert("불가")} />} */}

      <button
        onClick={() => (passbtn ? alert("가능") : alert("불가"))}
        style={{
          padding: "10px 200px",
          borderRadius: "10px",
          border: "none",
          color: "gray",
          fontWeight: "600",
          backgroundColor: passbtn ? "black" : "pink",
        }}
      >
        {text}
      </button>
    </>
  );
};

export default MusinsaMainBtn;
