import React from "react";
import { Route } from "react-router-dom";
import forbidden from "../../Assets/images/forbidden.png";
import classes from "./ProtectedRoute.module.css";

const ProtectedRoute = ({
  component: Component,
  alternativeComponent: AlternativeComponent,
  visible,
  readOnly,
  ...otherProps
}) => {
  return (
    <Route
      {...otherProps}
      render={(props) =>
        visible ? (
          <Component readOnly={readOnly} {...props} />
        ) : AlternativeComponent ? (
          <AlternativeComponent readOnly={readOnly} {...props} />
        ) : (
          <img alt="Not Authorized" src={forbidden} className={classes.notAuthorized} />
        )
      }
    />
  );
};

export default ProtectedRoute;
