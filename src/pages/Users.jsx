import { FixedSizeGrid as Grid } from "react-window";

import Dashboard from "src/components/Dashboard";
import UsersCell from "src/components/UsersCell";

const Users = () => {
  return (
    <>
      <Dashboard>
        <Grid
          columnCount={30}
          columnWidth={100}
          height={500}
          rowHeight={35}
          width={980}
          rowCount={1000}
        >
          {UsersCell}
        </Grid>
      </Dashboard>
    </>
  );
};

export default Users;
