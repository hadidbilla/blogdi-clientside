import React, { Suspense } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/common/NavBar/NavBar";
import Footer from "./components/common/Footer/Footer";
const Home = React.lazy(() => import("./components/Home/Home/Home"));
const SignUp = React.lazy(() => import("./components/SignUp/SignUp"));
const SignIn = React.lazy(() => import("./components/SignIn/SignIn"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const ResetPassword = React.lazy(() =>
  import("./components/ResetPassword/ResetPassword")
);
function App() {
  return (
    <div>
      <Suspense fallback={"loading....."}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
