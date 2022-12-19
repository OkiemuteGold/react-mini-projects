import { useState, useEffect } from "react";
import Loading from './Loading';
import Tours from './Tours';
// import './App.css';

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

            console.log(tours);

            setLoading(false);
            setTours(tours);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
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

    return (
        <main>
            <Tours tours={tours} />
        </main>
    );
}

export default App;
