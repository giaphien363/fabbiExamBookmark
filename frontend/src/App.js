import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import NotFound from './components/NotFound';

import "./App.css";

const Bookmark = React.lazy(() => import("./features/Bookmark"));


function App() {
  return (
    <>
      <Suspense fallback={<div> Loading... </div>}>
         
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/bookmark" />
            <Route path="/bookmark" component={Bookmark} />
            <Route component={NotFound} />
          </Switch> 
        </BrowserRouter> 
      </Suspense> 
    </>
  );
}

export default App;
