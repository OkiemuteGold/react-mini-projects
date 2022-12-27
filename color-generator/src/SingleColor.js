import { useState, useEffect } from "react";
// import rgbToHex from './utilities'

const SingleColor = ({ color, index }) => {
    const { rgb, weight, hex } = color;
    const [alert, setAlert] = useState(false);
    const rgbCode = rgb.join(",");
    const background = `rgb(${rgbCode})`;

    // const hexColor = rgbToHex(...rgb);
    const hexColor = "#" + hex;

    useEffect(() => {
        const alertTimeout = setTimeout(() => {
            setAlert(false);
        }, 2500);

        return () => {
            clearTimeout(alertTimeout);
        }
    }, [alert])

    return (
        <article
            className={`color ${index > 10 && "color-light"}`}
            style={{ backgroundColor: background }}
            onClick={() => {
                navigator.clipboard.writeText(hexColor);
                setAlert(true);
            }}
        >
            <p className="percent-value">{weight}%</p>

            {/* <p className="color-value">{hexColor}</p> */}
            <p className="color-value">{hexColor}</p>

            {
                alert && <p className="alert" >Copied to clipboard</p>
            }
        </article>
    );
};

export default SingleColor;
