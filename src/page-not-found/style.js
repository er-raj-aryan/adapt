import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  root: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    marginTop:'50vh',
  },
  link:{
    background: '#bfbfbfd1',
    padding: '10px',
    borderRadius: '10px',
    textDecoration: 'none',
    fontWeight: '700',
    color: '#585858',
    margin:'20px'
  }
 
}));

export default useStyle;