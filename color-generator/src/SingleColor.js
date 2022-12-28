import { useState, useEffect } from "react";
// import rgbToHex from './utilities'

const SingleColor = ({ color, index, length }) => {
    const { rgb, weight, hex } = color;
    const [alert, setAlert] = useState(false);
    const rgbCode = rgb.join(",");
    const background = `rgb(${rgbCode})`;

    // const hexColor = rgbToHex(...rgb);
    const hexColor = "#" + hex;
    const limit = Math.round(length / 2);

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
            className={`color ${index >= limit && "color-light"} ${index === limit - 1 && "bg-colored"}`}
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
