import React, { useState } from "react";
// import data from "./data";
// import List from "./List";

function App() {
    // const [count, setCount] = useState(0);
    // const [text, setText] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        console.log("form submitted: ", e);
    }

    return (
        <section className="section-center">
            <h3>Tired of boring lorem ipsum?</h3>
            <form className="lorem-form" onSubmit={submitForm}>

            </form>
        </section>
    );
}

export default App;
