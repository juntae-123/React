const BaseText = (props) => {
  const { text, color, fontSize } = props;
  return <span style={{ color, fontSize }}>{text}</span>;
};
export default BaseText;
