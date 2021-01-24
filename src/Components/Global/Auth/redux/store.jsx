import { createStore, applyMiddleware } from "redux";
import { authReducer } from "./authReducer";
import thunk from "redux-thunk";

//local import
import { verifyAuth } from "./auth";

export default function configureStore(persistedState) {
  const store = createStore(
    authReducer,
    persistedState,
    applyMiddleware(thunk)
  );
  store.subscribe(() => console.log(store.getState()));
  store.dispatch(verifyAuth());
  return store;
}