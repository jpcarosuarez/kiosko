import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}) => {
  console.log(isAuthenticated, isVerifying);
  return (
    <Route
      {...rest}
      render={props =>
        isVerifying ? (
          <div />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;
