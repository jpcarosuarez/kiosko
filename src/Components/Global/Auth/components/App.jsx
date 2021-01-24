import { Switch, Redirect, Route } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import { connect } from "react-redux";

//loca imports
import Home from "./Home";
import Login from "./login";

export function App(props) {
  const { isAuthenticated, isVerifying } = props;

  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route exact path="/login" component={Login} />
      <Redirect to="/" />
    </Switch>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated,
    isVerifying: state.isVerifying
  };
};

export default connect(mapStateToProps)(App);
