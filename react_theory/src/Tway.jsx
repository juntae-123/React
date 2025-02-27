// import { IoIosHome } from "react-icons/io";
// import { FaCarSide } from "react-icons/fa";
// import { FaBagShopping } from "react-icons/fa6";
// import { CiAirportSign1 } from "react-icons/ci";
// import { CiCreditCard1 } from "react-icons/ci";
// import { FaWifi } from "react-icons/fa";

const Tway = (props) => {

  return (
    <article style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div>{props.icon}</div>

        <p>{props.name}</p>
      </div>
    </article>
  );
};

export default Tway;


// const style = {
//     width: "100px",
//     height: "100px",
//     backgroundColor: "skyblue",
//     borderRadius: "9999px",
//     marginRight: "30px",
//     display: "flex",
//     alignItems: "center",
//     flexDirection: "column",
//   };
