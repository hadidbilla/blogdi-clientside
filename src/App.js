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
const Profile = React.lazy(() => import("./components/Profile/Profile"));
const SinglePost = React.lazy(() =>
  import("./components/SinglePost/SinglePost")
);
const ChangePassword = React.lazy(() =>
  import("./components/ChangePassword/ChangePassword")
);
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
            <Route exact path="/change-password" component={ChangePassword} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/single-post" component={SinglePost} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
