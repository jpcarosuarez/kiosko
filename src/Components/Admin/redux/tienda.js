import { createStore, applyMiddleware } from "redux";
import { authReducer } from "./authReducer";
import thunk from "redux-thunk";

//local import
import { verifyAuth } from "./auth";

export default function configureStore(persistedState) {
  const tienda = createStore(
    authReducer,
    persistedState,
    applyMiddleware(thunk)
  );
  tienda.subscribe(() => console.log(tienda.getState()));
  tienda.dispatch(verifyAuth());
  return tienda;
}