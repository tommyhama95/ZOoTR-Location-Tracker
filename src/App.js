import { BrowserRouter , Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Ocarina from "./pages/Ocarina";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/ocarina" component={Ocarina}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;