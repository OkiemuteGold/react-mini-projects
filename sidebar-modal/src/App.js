import React, { useState, useEffect } from 'react'
import Home from './Home'
import Modal from './Modal'
import Sidebar from './Sidebar'

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <Home />
            <Modal />
            <Sidebar />
        </>
    );
}

export default App;
