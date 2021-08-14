import "./App.css";
import { Grid, makeStyles } from "@material-ui/core";
import NavBar from "./components/NavBar";
import LefftBar from "./components/LefftBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";

const useStyles = makeStyles((theme) => ({
  item: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const appStyle = useStyles();
  return (
    <div className="App">
      <NavBar />
      <Grid container>
        <Grid item sm={3} xs={2}>
          <LefftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={2} className={appStyle.item}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
