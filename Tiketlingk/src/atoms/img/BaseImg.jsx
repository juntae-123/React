const BaseImg = (props) => {
  const { img } = props;
  return (
    <div>
      <img style={{ width: "100px" }} src={img} alt="" />
    </div>
  );
};

export default BaseImg;
