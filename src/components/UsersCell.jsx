import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData } from "src/store/slices/UsersSlice";
import PropTypes from "prop-types";

const UsersCell = ({ columnIndex, rowIndex, style }) => {
  const dispatch = useDispatch();

  const datas = useSelector((state) => state.user.usersData);

  const initFetch = useCallback(() => {
    dispatch(getUsersData());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const cellStyle = {
    ...style,
    border: "1px solid black",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    padding: "10px",
    fontWeight: rowIndex === 0 ? "bold" : "normal",
    backgroundColor: rowIndex === 0 ? "#f0f0f0" : "white",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const rowData = rowIndex === 0 ? datas[0] : datas[rowIndex - 1];
  let cellData = "";
  if (rowData) {
    const columnNames = Object.keys(rowData);
    cellData =
      rowIndex === 0
        ? columnNames[columnIndex]
        : rowData[columnNames[columnIndex]];
  }

  return <div style={cellStyle}>{cellData}</div>;
};

UsersCell.propTypes = {
  columnIndex: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default UsersCell;
