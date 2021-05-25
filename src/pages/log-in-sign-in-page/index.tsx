import React from "react";

import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

import SignIn from "../../components/Sign-in";
import LogIn from "../../components/Log-in";
import AsideBackgroundImage from "../../components/AsideBackgroundImage";

import { RouterContainer } from "./styles";

import { RouteParams } from "./types";

const LogInAndSignIng = (props: RouteParams) => {
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
