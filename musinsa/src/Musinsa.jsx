const Musinsa = () => {
  const [btn, setBtn] = useState([
    { contents: "만 14세 이상", isOption: true, checkedBox: false },
    { contents: "무신사", isOption: true, checkedBox: false },
    { contents: "마케팅", isOption: false, checkedBox: false },
    { contents: "광고", isOption: false, checkedBox: false },
  ]);

  const click = (i) => {
    setBtn((prev) => {
      const newArr = [...prev];
      newArr[i].checkedBox = !newArr[i].checkedBox;
      return newArr;
    });
  };

  return (
    <>
      {btn.map((v, i) => (
        <MusinsaSmallBtn
          contents={v.contents}
          a={() => click(i)}
          isOption={v.isOption}
        />
      ))}
      <MusinsaMainBtn
        passbtn={btn
          .filter((v) => v.isOption == true)
          .every((v) => v.checkedBox == true)}
        text={"동의하고 본인인증하기"}
      />
    </>
  );
};

export default Musinsa;
