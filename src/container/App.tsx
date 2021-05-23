import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Switch, Route, Redirect } from "react-router-dom";

import { auth, createUserProfileDocument } from "../firebase/utils";

import HomePage from "../pages/home-page";
import LogInAndSignIn from "../pages/log-in-sign-in-page";
import MapPage from "../pages/map-page";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.currentUser);

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
      <Route
        path="/user"
        render={() => (user ? <Redirect to="/map" /> : <LogInAndSignIn />)}
      />
      <Route path="/map">
        <MapPage />
      </Route>
    </Switch>
  );
}

export default App;
