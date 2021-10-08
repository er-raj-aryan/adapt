import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  root: {},
  container:{
   display:'flex',
   justifyContent: 'center',
   paddingLeft:'20px',
   paddingRight:'20px',
   paddingBottom:'20px',
   marginTop: '-100px',
   flexDirection:'column !important',
  },
  item:{
marginTop:'20px !important',
  },
  img:{
    width:'100%',
    objectFit:'contain',
    WebkitMaskImage:'linear-gradient(180deg,#000,transparent)',
  },
  cart__container:{
    justifyContent: 'center',
  },
  cart__items:{
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyle