import "./App.css";
import { makeStyles } from "@material-ui/core";
import NavBar from "./components/NavBar";
const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.myButton,
  },
}));

function App() {
  const appStyle = useStyles();
  return <div className="App">
    <NavBar/>
  </div>;
}

export default App;
