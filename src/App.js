import React, { Suspense } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavBar from "./components/common/NavBar/NavBar";
const Home = React.lazy(() => import("./components/Home/Home/Home"));
const SignUp = React.lazy(() => import("./components/SignUp/SignUp"));
const SignIn = React.lazy(() => import("./components/SignIn/SignIn"));
function App() {
  return (
    <div>
      <Suspense fallback={"loading....."}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
