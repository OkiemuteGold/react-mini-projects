import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

const Review = ({ people, index, setCurrentReview }) => {
    return (
        <div className="section-center">
            {
                people.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person;

                    let position = "nextSlide";

                    if (personIndex === index) {
                        position = "activeSlide";
                    }

                    if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                        position = "lastSlide";
                    }

                    return (
                        <article key={id} className={position} >
                            <img src={image} alt={name} className="person-img" />

                            <h4>{name}</h4>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p>

                            <FaQuoteRight className="icon" />
                        </article>
                    );
                })
            }

            <button className="prev" onClick={() => setCurrentReview(index - 1)}>
                <FiChevronLeft />
            </button>

            <button className="next" onClick={() => setCurrentReview(index + 1)}>
                <FiChevronRight />
            </button>
        </div>
    )
}

export default Review;