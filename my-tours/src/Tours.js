import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
    return (
        <section>
            <div className="title">
                <h2>My Tours</h2>

                <div className="underline"></div>
            </div>
            <div className="tours">
                {tours.map(tour => {
                    return <Tour tour={tour} key={tour.login.uuid} removeTour={removeTour} ></Tour>;
                })}
            </div>
        </section>
    )
};

export default Tours;
