import React, { useState, useEffect } from 'react';
import data from './data';
import Review from './Review';

function App() {
    const [people] = useState(data)
    const [index, setIndex] = useState(0)

    const setCurrentReview = (index) => {
        setIndex(index);
    }

    useEffect(() => {
        const lastIndex = people.length - 1;

        if (index < 0) {
            setIndex(lastIndex);
        }

        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setCurrentReview(index + 1);
        }, 3000);

        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <section className="section">
            <div className="title">
                <h2>
                    <span>/</span>reviews
                </h2>
            </div>

            <Review people={people} index={index} setCurrentReview={setCurrentReview} />
        </section>
    )
}

export default App;
