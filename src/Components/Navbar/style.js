import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  root: {},
  appBar: {
    backgroundColor: "#0000 !important",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    textDecoration: "none",
    color: "white ",
    fontWeight:"600 !important",
    fontFamily: "Poppins, sans-serif !important"
  },
  cart: {
    color: "white !important",
  },
}));

export default useStyle;
