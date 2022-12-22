import { useState, useEffect } from "react";
import Loading from './Loading';
import Tours from './Tours';

// const url = "https://course-api.netlify.app/api/react-tours-project";

// const options = {
// method: 'GET',
// mode: 'no-cors',
// headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json',
// }
// }

function App() {
    const url = "https://randomuser.me/api/?results=15";
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        setLoading(true);

        try {
            const response = await fetch(url);
            const result = await response.json();
            const tours = result.results;

            // console.log(tours);

            setLoading(false);
            setTours(tours);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    }

    const removeTour = (id) => {
        const newTours = tours.filter(tour => {
            return tour.id !== id;
        })

        setTours(newTours);
    }

    useEffect(() => {
        fetchTours();
    }, [])

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        )
    }

    if (tours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h2>No tours left</h2>
                    <button className="btn" onClick={fetchTours}>Refresh</button>
                </div>
            </main>
        )
    }

    return (
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    );
}

export default App;
