
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { ComoApp } from "./comoApp";
import { configureStore } from "./redux/tienda";

const store = configureStore();

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <ComoApp />
      </Router>
    </Provider>
  );
}

export default Root;
