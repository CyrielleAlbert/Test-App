import "./App.css";
import { Global } from "./components/Global";
import { BrowserRouter } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { usersStore } from "./store/store";
import { usersSelector } from "./store/selector";
import { addUserAction } from "./store/actions";

export const App = () => {
  return (
    <Provider store={usersStore}>
      <BrowserRouter>
        <Global />
      </BrowserRouter>
    </Provider>
  );
};
