import React, { useState, useEffect } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
    const [color, setColor] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const [colorVariations, setColorVariations] = useState(10);
    const [options, setOptions] = useState([]);

    const defaultColor = new Values("#f15025").all(colorVariations);
    const [colorList, setColorList] = useState(defaultColor);

    const variations = () => {
        const variationOptions = [];

        for (let i = 1; i < colorVariations + 1; i++) {
            variationOptions.push(i);
        }

        setOptions(variationOptions);
    };

    useEffect(() => {
        variations();
    }, []);

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
            let colors = new Values(color).all(colorVariations);
            // console.log(colors, colorVariations);

            setError(false);
            setColorList(colors);
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
                        onChange={
                            (e) => setColor(e.target.value)
                        }
                        placeholder="#f15025"
                        className={`${error ? "error" : null}`}
                    />

                    <select
                        name="colorVariations"
                        id="colorVariations"
                        value={colorVariations}
                        onChange={
                            (e) => setColorVariations(parseInt(e.target.value))
                        }
                    >
                        <option value="" disabled >Range</option>
                        {
                            options.map((option) => {
                                return (
                                    <option value={option} key={option}>
                                        {option}
                                    </option>
                                );
                            })
                        }
                    </select>

                    <button className="btn" type="submit">
                        Submit
                    </button>
                </form>
            </section>

            {error && <section className="container">
                <p>{errorMessage}</p>
            </section>}

            <section className="colors">
                {
                    colorList.map((color, index) => {
                        // console.log(color);
                        return <SingleColor color={color} key={index} index={index} length={colorList.length} />
                    })
                }
            </section>
        </>
    );
}

export default App;
