import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Switch, Route } from "react-router-dom";

import { auth, createUserProfileDocument } from "../firebase/utils";

import HomePage from "../pages/home-page";
import LoginPage from "../pages/log-in-page";
import SignInPage from "../pages/sign-in-page";
import MapPage from "../pages/sign-in-page";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscribeAuthHandler = () => {
      auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef?.onSnapshot((snapShot) => {
            dispatch({
              type: "SET_CURRENT_USER",
              payload: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            });
          });
        } else {
          dispatch({
            type: "SET_CURRENT_USER",
            payload: userAuth,
          });
        }
      });
    };

    subscribeAuthHandler();

    return () => {
      subscribeAuthHandler();
    };
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/log-in" exact>
        <LoginPage />
      </Route>
      <Route path="/sign-in" exact>
        <SignInPage />
      </Route>
      <Route path="/map">
        <MapPage />
      </Route>
    </Switch>
  );
}

export default App;
