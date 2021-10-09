import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  root: {},
  img: {
    objectFit: "contain !important",
    padding: '20px 0px',
  },
  title: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "1",
    overflow: "hidden",
    fontFamily: "Poppins, sans-serif !important",
  },
  description: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "3",
    overflow: "hidden",
    fontFamily: "Poppins, sans-serif !important",
  },
  cardAction:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
  },
  price:{
    fontFamily: "Poppins, sans-serif !important",
  },
}));

export default useStyle;
