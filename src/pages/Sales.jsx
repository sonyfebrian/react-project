import { FixedSizeGrid as Grid } from "react-window";

import Dashboard from "src/components/Dashboard";
import Cell from "src/components/SalesCell";

const Sales = () => {
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

export default Sales;
