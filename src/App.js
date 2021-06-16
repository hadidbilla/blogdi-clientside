import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Suspense } from "react/cjs/react.development";
import NavBar from "./components/common/NavBar/NavBar";
const Home = React.lazy(() => import("./components/Home/Home/Home"));
const SignUp = React.lazy(() => import("./components/SignUp/SignUp"));
const SignIn = React.lazy(() => import("./components/SignIn/SignIn"));
function App() {
  return (
    <div className="">
      <Suspense fallback={"loading....."}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
