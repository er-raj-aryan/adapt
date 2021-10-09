import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  root: {
    backgroundColor:'#efecec',
  },
  img: {
    width: "100%",
    objectFit: "contain",
    WebkitMaskImage: "linear-gradient(180deg,#000,transparent)",
  },
  container: {
    padding: "20px",
    justifyContent:'center',
  },
  item: {},
  langauge:{
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
  }
}));

export default useStyle;
