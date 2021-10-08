import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  root: {},
  img: {
    objectFit: "contain !important",
  },
  title: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "1",
    overflow: "hidden",
  },
  description: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "3",
    overflow: "hidden",
  },
  cardAction: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  qtySection: {
    display: "flex",
  },
  input: {
    width: "30px",
    outline: "none",
    border: "none",
  },
}));

export default useStyle;
