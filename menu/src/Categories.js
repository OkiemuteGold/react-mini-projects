import { useState } from "react"

const Categories = ({ allCategories, filterItems }) => {
    const [active, setActive] = useState("all");

    const showCategory = (category) => {
        setActive(category);
        filterItems(category);
    }

    return (
        <div className="btn-container">
            {allCategories.map((category, index) => (
                <button
                    type="button"
                    className={`filter-btn ${active === category ? "active" : ""}`}
                    key={index}
                    onClick={() => showCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;
