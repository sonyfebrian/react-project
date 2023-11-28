import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FixedSizeGrid as Grid } from "react-window";
import { getSalesData } from "src/store/slices/SalesSlice";
import Dashboard from "src/components/Dashboard";
import PropTypes from "prop-types";

const Sales = () => {
  const dispatch = useDispatch();

  const tutorials = useSelector((state) => state.sales);

  const initFetch = useCallback(() => {
    dispatch(getSalesData());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const Cell = ({ columnIndex, rowIndex, style }) => {
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

    const rowData = rowIndex === 0 ? tutorials[0] : tutorials[rowIndex - 1];
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

  return (
    <>
      <Dashboard>
        <Grid
          columnCount={7}
          columnWidth={100}
          height={500}
          rowHeight={35}
          width={720}
          rowCount={1000}
        >
          {Cell}
        </Grid>
      </Dashboard>
    </>
  );
};
Sales.propTypes = {
  columnIndex: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};
export default Sales;
