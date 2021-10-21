import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import SingleProduct from "./components/SingleProduct";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/product/:id">
          <SingleProduct />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
