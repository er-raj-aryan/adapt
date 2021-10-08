import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  root: {},
  appBar: {
    backgroundColor: "#e7e3e3 !important",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    textDecoration: "none",
    color: "#323232bd",
    fontWeight:"600 !important",
    fontFamily: "Poppins, sans-serif !important"
  },
  cart: {},
}));

export default useStyle;
