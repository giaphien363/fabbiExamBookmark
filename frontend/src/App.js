import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import BookmarkLet from "./features/BookmarkLet";
import Login from "./features/Auth/components/Login/index";
import Signup from "./features/Auth/components/Signup/index";

const Bookmark = React.lazy(() => import("./features/BookmarkList"));

function App() {
  return (
    <>
      <Suspense fallback={<div> Loading... </div>}>
        {" "}
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/bookmark" />
            <Route path="/bookmark" component={Bookmark} />{" "}
            <Route path="/bookmarklet" component={BookmarkLet} />{" "}
            <Route exact path="/login" component={Login} />{" "}
            <Route exact path="/register" component={Signup} />{" "}
            <Route component={NotFound} />{" "}
          </Switch>{" "}
        </BrowserRouter>{" "}
      </Suspense>{" "}
    </>
  );
}

export default App;
