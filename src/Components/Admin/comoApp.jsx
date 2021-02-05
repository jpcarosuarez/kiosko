import { Switch, Redirect, Route } from "react-router-dom";
import { ProtectedRoute } from "./protectedRoute";
import { connect } from "react-redux";

//loca imports
import Dashboard from "./dashboard";
import Login from "./login";

export function comoApp(props) {
  const { isAuthenticated, isVerifying } = props;

  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/Dashboard"
        component={Dashboard}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route exact path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated,
    isVerifying: state.isVerifying
  };
};

export default connect(mapStateToProps)(comoApp);
