// import Button from "./Button";
// import Saysage from "./Saysage";
import Jacob from "./Jacob";
import Pay from "./Pay";
import Tway from "./Tway";
import { IoIosHome } from "react-icons/io";
import { FaCarSide } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { CiAirportSign1 } from "react-icons/ci";

function App() {
  const twatData = [
 
  ]

  return (
    <>
      <Tway name={"호텔"} icon={<IoIosHome />}></Tway>
      <Tway name={"호텔"} icon={<FaCarSide />}></Tway>
      <Tway name={"호텔"} icon={<FaBagShopping />}></Tway>
      <Tway name={"aa"} icon={<CiAirportSign1 />}></Tway>
      <Tway name={"aa"} icon={<CiAirportSign1 />}></Tway>
      <Tway name={"aa"} icon={<CiAirportSign1 />}></Tway>
    </>
  );
}

export default App;
