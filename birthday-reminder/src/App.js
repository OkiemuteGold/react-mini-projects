import React, { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
    const [people, setPeople] = useState(data);

    return (
        <main>
            <section className="container">
                <h3>{people.length} birthdays today</h3>

                <div>
                    <List people={people} />
                </div>

                <button onClick={() => setPeople([])}>Clear All</button>
            </section>
        </main>
    );
}

export default App;
