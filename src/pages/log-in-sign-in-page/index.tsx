import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";

import { useSelector } from "react-redux";

import SignIn from "../../components/Sign-in";
import LogIn from "../../components/Log-in";
import AsideBackgroundImage from "../../components/AsideBackgroundImage";

import { RouterContainer } from "./styles";

interface RouteParams {
  match: {
    params: string;
    path: string;
    url: string;
  };
}

const LogInAndSignIng = (props: RouteParams) => {
  const user = useSelector((state: any) => state.user.currentUser);

  const { path } = props.match;
  return (
    <RouterContainer>
      <Switch>
        <Route path={`${path}`} exact render={LogIn} />
        <Route path={`${path}/sign-in`} exact render={SignIn} />
      </Switch>
      <AsideBackgroundImage />
    </RouterContainer>
  );
};

export default withRouter(LogInAndSignIng);
