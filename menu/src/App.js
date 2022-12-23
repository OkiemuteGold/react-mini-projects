import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const categories = items.map(category => category.category);
const categoryItems = ["all", ...new Set(categories)];

console.log(categoryItems);

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [allCategories] = useState(categoryItems);

    const filterItems = (category) => {
        if (category === "all") {
            setMenuItems(items);
            return;
        }

        const newItems = items.filter(item => item.category === category)
        setMenuItems(newItems);
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our menu</h2>
                    <div className="underline"></div>
                </div>

                <Categories allCategories={allCategories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    )
}

export default App;
