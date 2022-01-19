import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header/Header";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

import SuuqScreen from "./Screens/SuuqScreen";
import SuuqDetScreen from "./Screens/SuuqDetScreen";
import RegisterScreen from "./Screens/UserScreens/RegisterScreen";
import LoginScreen from "./Screens/UserScreens/LoginScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="">
          <Route path="/" exact component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/som/suuq" exact component={SuuqScreen} />
          <Route path="/suuq/:id" component={SuuqDetScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={LoginScreen} />
        </main>
      </Router>
    </div>
  );
}

export default App;
