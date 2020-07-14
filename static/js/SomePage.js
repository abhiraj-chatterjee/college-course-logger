import SomeComponent from "./components/SomeComponent";
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const SomePage = () => {
    return <SomeComponent />;
};

ReactDOM.render(<SomePage />, document.getElementById("render-react-here"));