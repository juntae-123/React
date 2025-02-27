const TadaId = (props) => {
  const { placeholder, change, pwtext } = props;
  return (
    <>
      <input onChange={change} type="text" placeholder={placeholder} />
    </>
  );
};

export default TadaId;
