import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import List from "./List";

function App() {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({ show: false, type: "", message: "" });

    const submitForm = (e) => {
        e.preventDefault();
        console.log("submitted");

        if (!name) {
            setAlert({
                show: true,
                type: "danger",
                message: "Please enter an item"
            });

            setTimeout(() => {
                setAlert({
                    show: false,
                })
            }, 2500);
        } else if (name && isEditing) {
            // handle edit
            setIsEditing(true);
        } else {
            const newItem = {
                id: new Date().getTime().toString(),
                title: name,
            }

            setList([...list, newItem]);
            setName("");
            setAlert({
                show: true,
                type: "success",
                message: newItem.title + " added to list"
            });

            setTimeout(() => {
                setAlert({
                    show: false,
                })
            }, 2500);
        }
    };

    return (
        <section className="section-center">
            <div className="grocery-container">
                <form className="grocery-form" onSubmit={submitForm}>
                    {alert.show && <Alert />}

                    <h3>Grocery list</h3>

                    <div className="form-control">
                        <input
                            type="text"
                            className="grocery-input"
                            placeholder="e.g. eggs"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <button type="submit" className="submit-btn">
                            {isEditing ? "edit" : "submit"}
                        </button>
                    </div>
                </form>

                <List groceryItems={list} />
                <button className="clear-btn">Clear items</button>
            </div>
        </section>
    );
}

export default App;
