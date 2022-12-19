import { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
    let [index, setIndex] = useState(0);
    const { name, job, image, text } = reviews[index];

    const checkIndex = (index) => {
        if (index < 0) {
            return reviews.length - 1
        }

        if (index > reviews.length - 1) {
            return 0
        }

        // console.log(index);
        return index;
    }

    const previousPerson = () => {
        setIndex(index => {
            let newIndex = index - 1;
            return checkIndex(newIndex);
        });
    }

    const nextPerson = () => {
        let newIndex = index + 1;
        setIndex(checkIndex(newIndex));
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * reviews.length);

        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        // console.log(randomNumber, index);

        setIndex(checkIndex(randomNumber));
    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>

            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>

            <div className="button-container">
                <button className="prev-btn" onClick={previousPerson} >
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson} >
                    <FaChevronRight />
                </button>
            </div>

            <button className="random-btn" onClick={randomPerson} >Surprise me</button>
        </article>
    );
};

export default Review;
