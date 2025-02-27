import { useState } from "react";

const Coffee = () => {
  const coffeeAr = [
    { menu: "바닐라크림콜드블루", price: "5500" },
    { menu: "아메리카노", price: "2000" },
    { menu: "프라푸치노", price: "3500" },
    { menu: "화이트초코", price: "4500" },
    { menu: "카페라떼", price: "4000" },
  ];

  const [num, setNum] = useState(0);

  const nextBtn = () => {
    setNum((prev) => {
      if (prev == 4) {
        alert("ㅁ메뉴");
        return 4;
      } else {
        return prev + 1;
      }
    });
  };
  const baBtn = () => {
    setNum((prev) => {
      if (prev == 0) {
        alert("ㅊ메뉴");
        return 0;
      } else {
        return prev - 1;
      }
    });
  };
  return (
    <>
      <div>
        <button onClick={baBtn}>이전 메뉴</button>
        <span>메뉴 이름:{coffeeAr[num].menu}</span>
        <span>메뉴 가격:{coffeeAr[num].price}</span>
        <button onClick={nextBtn}>다음 메뉴</button>
      </div>
    </>
  );
};

export default Coffee;
