import "./App.css";
import { Global } from "./components/Global";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Global />
    </BrowserRouter>
  );
};
