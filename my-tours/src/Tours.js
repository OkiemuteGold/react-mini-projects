import Tour from './Tour';

const Tours = ({ tours }) => {
    return (
        <section>
            <div className="title">
                <h2>My Tours</h2>

                <div className="underline"></div>
            </div>
            <div className="tours">
                {tours.map(tour => {
                    if (tour.id.value !== null && tour.nat !== "IR") {
                        return <Tour tour={tour} key={tour.id.value}></Tour>;
                    }
                })}
            </div>
        </section>
    )
};

export default Tours;
