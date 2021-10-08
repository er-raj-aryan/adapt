import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  root: {
    padding:'5px'
  },
  img:{
    width:'100%',
    objectFit:'contain',
    WebkitMaskImage:'linear-gradient(180deg,#000,transparent)',
  },
  card:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
  }
  
}));

export default useStyle