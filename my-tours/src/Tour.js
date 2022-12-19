import { useState } from "react";

const Tour = ({ tour, removeTour }) => {
    const { id, picture, name, dob, email, phone } = tour;
    const [readMore, setReadMore] = useState(false)

    const dummyInfo = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum asperiores esse soluta veniam tenetur, voluptatibus excepturi delectus ipsam eaque sit."

    return (
        <article className="single-tour">
            <img src={picture.large} alt={`${name.first} ${name.last}`} />

            <footer>
                <div className="tour-info">
                    <h4>{name.first} {name.last}</h4>
                    <h4 className="tour-price">{dob.age}</h4>
                </div>

                <p>Email: {email}</p>
                <p>Phone: {phone}</p>

                <div className="more-info">
                    {readMore ? dummyInfo : dummyInfo.substr(0, 80)}...
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? "show less" : "read more"}
                    </button>
                </div>

                <button className="delete-btn" onClick={() => removeTour(id)} >not interested</button>
            </footer>
        </article>
    );
};

export default Tour;
