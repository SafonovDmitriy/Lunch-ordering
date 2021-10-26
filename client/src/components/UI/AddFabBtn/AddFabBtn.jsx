import { Fab } from "@material-ui/core";
import { Add } from "@mui/icons-material";

const AddFabBtn = ({ onClick }) => (
  <Fab
    aria-label="Add"
    color="primary"
    style={{ marginLeft: "auto" }}
    onClick={onClick}
    children={<Add />}
  />
);
export default AddFabBtn;
