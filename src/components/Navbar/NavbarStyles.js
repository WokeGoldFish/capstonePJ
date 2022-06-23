const dWidth = 0;
export const useStyles = (theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    marginBottom: theme.spacing(2),
    background:"#D3D3CB",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${dWidth}px)`,
      marginLeft: dWidth,
    },
  },
  title: {
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    color: 'black',
  },
  name:{
    flexGrow:1,
    justifyContent: "center",
    display: "flex",
    color: 'black',
  },
  image: {
    marginRight: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  button:{
    color:"blue"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
});




