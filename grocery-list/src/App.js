import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import List from "./List";

function App() {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({
        show: false,
        type: "",
        message: ""
    });

    const showAlert = (show = false, type = "", message = "") => {
        // in es6 if parameter and property used is same, you can simply use one. i.e show: show, or show,
        setAlert({
            show, type, message,
        });
    }

    const submitForm = (e) => {
        e.preventDefault();

        if (!name) {
            showAlert(true, "danger", "Please enter an item");

            setTimeout(() => {
                showAlert(false);
            }, 2500);
        } else if (name && isEditing) {
            // handle edit
            setIsEditing(true);
        } else {
            const newItem = {
                id: "item" + new Date().getTime().toString(),
                title: name,
            };

            setList([...list, newItem]);
            setName("");

            showAlert(true, "success", newItem.title + " was added to your list");

            setTimeout(() => {
                showAlert(false);
            }, 2500);
        }
    };

    // const deleteItem = (itemId) => {
    //     const newList = list.filter(item => {
    //         return item.id !== itemId;
    //     });

    //     setList(newList);
    // }

    return (
        <section className="section-center">
            <form className="grocery-form" onSubmit={submitForm}>
                {
                    alert.show && <Alert {...alert} />
                }

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

            {
                list.length > 0 && (
                    <div className="grocery-container">
                        <List groceryItems={list} />
                        <button className="clear-btn">Clear items</button>
                    </div>
                )
            }
        </section>
    );
}

export default App;
