import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Spinner from "../components/spinner";
import NotFound from "../views/pageNotFound/PageNotFound";
// import Navbar from "../components/features/navbar/navbar";
const Home = lazy(() => import("../views/home/Home"));


const AppRouter = () => (
  <Router>
    <Suspense fallback={<Spinner />}>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default AppRouter;
