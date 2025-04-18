import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeinfo = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timeinfo);
  }, []);
  return (
    <div
      style={{
        width: "200px",
        border: "1px solid black",
        padding: "20px",
        textAlign: "center",
        borderRadius: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
    >
      <h2>현재 시간</h2>
      <h3>{time.toLocaleTimeString()}</h3>
      <p>{time.toLocaleDateString()}</p>
    </div>
  );
};

export default Time;
