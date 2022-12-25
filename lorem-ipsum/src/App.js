import React, { useState } from "react";
import data from "./data";

function App() {
    const [count, setCount] = useState(0);
    const [texts, setTexts] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        // use onChange when using value attr in input, otherwise use defaultValue for mutability.

        // let amount = parseInt(e.target[0].value);
        let amount = parseInt(count);

        if (amount <= 0) {
            amount = 1;
        }

        if (amount > data.length) {
            amount = data.length;
        }

        const allText = data.slice(0, amount);
        // console.log(allText);
        setTexts(allText);
    }

    // here useEffect can be used like a 2-Way Dynamic data-binding: get count onChange, check condition and getText(amount)

    return (
        <section className="section-center">
            <h3>Tired of boring lorem ipsum?</h3>

            <form className="lorem-form" onSubmit={submitForm}>
                <label htmlFor="amount">Paragraphs:</label>

                <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />

                <button type="submit" className="btn">Generate</button>
            </form>

            <article>
                {
                    texts.map((text, index) => {
                        return <p key={index} >{text}</p>
                    })
                }
            </article>
        </section>
    );
}

export default App;
