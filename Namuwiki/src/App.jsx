import Tableheader from "./component/Tableheader";
import TableRow from "./container/TableRow";
function App() {
  const css = { backgroundColor: "red", color: "white" };
  const arr = [
    {
      tabledata: { data: ["2017년 5월 28일"] },
      header: { headerName: "창단일", ...css },
    },
    {
      tabledata: { data: ["2017년 5월 28일"] },
      header: { headerName: "창단일", ...css },
    },
    {
      tabledata: { data: ["2017년 5월 28일"] },
      header: { headerName: "창단일", ...css },
    },
    {
      tabledata: { data: ["2017년 5월 28일"] },
      header: { headerName: "창단일", ...css },
    },
    {
      tabledata: { data: ["2017년 5월 28일"] },
      header: { headerName: "창단일", ...css },
    },
  ];
  return (
    <tbody>
      {arr.map((v) => {
        <TableRow {...v} />;
      })}
    </tbody>
  );
}

export default App;
