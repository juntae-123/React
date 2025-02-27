const Sumbtn = () => {
  const [numArray, setNumArray] = useState([
    { price: 10000, cnt: 0, max: 12 },
    { price: 30000, cnt: 0, max: 1 },
    { price: 20000, cnt: 0, max: 20 },
  ]);

  const plus = (i, max) => {
    setNumArray((prev) => {
      const newArray = [...prev];
      newArray[i].cnt =
        newArray[i].cnt == max ? newArray[i].cnt : newArray[i].cnt + 1;
      return newArray;
    });
  };
  const minus = (i) => {
    setNumArray((prev) => {
      const newArray = [...prev];
      newArray[i].cnt = newArray[i].cnt == 0 ? 0 : newArray[i].cnt - 1;
      return newArray;
    });
  };

  const rrAA = () => {
    setNumArray((prev) => {
      const newArray = [...prev];
      newArray.map((v) => (v.cnt = 0));
      return newArray;
    });
  };

  return (
    <>
      {numArray.map((v, i) => (
        <>
          <Price price={v.price} />
          <Counter
            cnt={v.cnt}
            plus={() => plus(i, v.max)}
            minus={() => minus(i)}
          />
        </>
      ))}
      <span>
        총액:{numArray.map((v) => v.price * v.cnt).reduce((a, c) => a + c)}
      </span>
      <Reset ress={rrAA} />
    </>
  );
};

export default Sumbtn;
