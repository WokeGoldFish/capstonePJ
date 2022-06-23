import { display } from "@mui/system";

export const useStyles = (theme) => ({
    title: {
      marginTop: '5%',
      justifyContent: 'center',
      display:'flex',
    },
    emptyButton: {
      minWidth: '150px',
      [theme.breakpoints.down('xs')]: {
        marginBottom: '5px',
      },
      [theme.breakpoints.up('xs')]: {
        marginRight: '20px',
      },
    },
    checkoutButton: {
      minWidth: '150px',
    },
    link: {
      textDecoration: 'none',
    },
    cardDetails: {
      display: 'flex',
      marginTop: '15%',
      width: '100%',
      justifyContent: 'space-between',
    }, 
})