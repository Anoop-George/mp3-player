import React, { lazy, Suspense } from "react";
//import SignUp from "./signup";
const SignUp = lazy(() => import("./signup"));
import { Route, Switch } from "react-router-dom";
import PrimarySearchAppBar from "./Appbar";
import favSongs from "./favsongs";
import CenteredGrid from "./layout";
import SignIn from "./login";

function Routing() {
  return (
    <React.Fragment>
      <PrimarySearchAppBar />

      <Switch>
        <Route exact path="/" component={CenteredGrid} />
        <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/signup" component={SignUp} />
        </Suspense>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/fav" component={favSongs} />
      </Switch>
    </React.Fragment>
  );
}

export default Routing;
