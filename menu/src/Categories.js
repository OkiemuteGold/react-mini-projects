// import { useState } from "react";

const Categories = ({ filterItems }) => {
    // const [isActive, setIsActive] = useState(false);

    return <div className="btn-container">
        <button className="filter-btn" onClick={() => filterItems('breakfast')} >Breakfast</button>
    </div>
};

export default Categories;
