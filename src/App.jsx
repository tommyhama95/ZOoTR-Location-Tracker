import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Ocarina from "./pages/Ocarina";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/" component={Ocarina}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;