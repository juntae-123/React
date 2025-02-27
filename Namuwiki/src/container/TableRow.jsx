import TableData from "../component/TableData";
import Tableheader from "../component/Tableheader";

const TableRow = (props) => {
  const { header, tabledata } = props;
  return (
    <tr>
      <Tableheader {...header} />
      <TableData {...tabledata} />
    </tr>
  );
};
export default TableRow;
