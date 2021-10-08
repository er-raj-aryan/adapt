import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  root: {},
  img:{
    width:'100%',
    objectFit:'contain',
    WebkitMaskImage:'linear-gradient(180deg,#000,transparent)',
  }
}));

export default useStyle