import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./variables.scss";
import "./main.scss";

import "./k95/imports";
import Desktop from "./Desktop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Desktop />);
