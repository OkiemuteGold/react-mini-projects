import React, { useState } from "react";
import Values from 'values.js'
import SingleColor from "./SingleColor";

function App() {
    const [color, setColor] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [colorList, setColorList] = useState([]);

    const submitColor = (e) => {
        e.preventDefault();

        // let letters = color.split("");
        // for (let i = 0; i < letters.length; i++) {
        //     if (letters[0] !== "#") {
        //         letters.unshift("#");
        //     }
        // }
        // let newColor = letters.join("");
        // let colors = new Values(newColor).all(10);

        try {
            let colors = new Values(color).all(10);
            console.log(colors);

            setError(false);
            setColorList(colors)
        } catch (error) {
            setError(true);
            setErrorMessage(error.message);
        }
    };

    return (
        <>
            <section className="container">
                <h3>Color generator</h3>

                <form onSubmit={submitColor}>
                    <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder="#f15025"
                        className={`${error ? 'error' : null}`}
                    />

                    <button className="btn" type="submit">
                        Submit
                    </button>
                </form>

                {
                    error && <p>{errorMessage}</p>
                }
            </section>

            <section className="colors">
                {
                    colorList.map((color, index) => {
                        console.log(color);

                        return <SingleColor color={color} key={index} index={index} />
                    })
                }
            </section>
        </>
    );
}

export default App;
