const Tour = ({ tour }) => {
    const { id, picture, name, dob, email, phone } = tour;

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
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quam laboriosam assumenda expedita, mollitia velit.</p>

                <button className="delete-btn">not interested</button>
            </footer>
        </article>
    );
};

export default Tour;
