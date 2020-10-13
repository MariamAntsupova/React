import React, { useState } from "react";
import "./style.css";

import Input from "./UserInput";
import Output from "./UserOutput";

export default function App() {
    let [value, setValue] = useState("");
    if (value.length <= 50) {

        return ( <
            div className = "App" >
            <
            Input placeholder = "Type Here ! "
            value = { value }
            onChange = {
                ({ target }) => {
                    setValue(target.value);
                }
            }
            /> <
            Output value = { value }
            /> < /
            div >
        );
    }
}