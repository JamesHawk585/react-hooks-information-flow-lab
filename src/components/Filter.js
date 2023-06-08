import React from "react";
import Header from "./Header";

function Headder({ onDarkModeClick }) {
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>Dark Mode</button>
        </header>
    );
}

export default Header;