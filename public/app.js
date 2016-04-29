import React from "react";
import ReactDOM from "react-dom";

import List from "./components/List";
import Book from "./components/Book";

window.I = ReactDOM.render(
  <List component={Book}/>,
  document.getElementById("react")
);
