import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import List from "./List";

function App() {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentEditItem, setCurrentEditItem] = useState({
        id: null,
        title: "",
    });
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

    const updateEditItem = (id = null, title = "") => {
        setCurrentEditItem({ id, title });
    }

    const submitForm = (e) => {
        e.preventDefault();

        if (!name) {
            showAlert(true, "danger", "Please enter an item");
        } else if (name && isEditing) {
            const newList = list.map(item => {
                if (item.id === currentEditItem.id) {
                    return { ...item, title: name };
                }
                return item;
            });

            setList(newList);
            setIsEditing(false);
            showAlert(true, "success", `${currentEditItem.title} changed to ${name}`);
            setName("");
            updateEditItem();
        } else {
            const newItem = {
                id: "item" + new Date().getTime().toString(),
                title: name,
            };

            setList([...list, newItem]);
            showAlert(true, "success", newItem.title + " was added to your list");
            setName("");
        }
    };

    const deleteItem = (id, title) => {
        const newList = list.filter(item => item.id !== id);

        setList(newList);
        showAlert(true, "danger", title + " removed from list");
    }

    const editItem = (id, title) => {
        console.log(id, title);
        const specificItem = list.find(item => item.id === id)

        setIsEditing(true);
        updateEditItem(id, title);
        setName(specificItem.title);
    }

    const clearList = () => {
        setList([]);
        showAlert(true, "danger", "list emptied");
    }

    return (
        <section className="section-center">
            <form className="grocery-form" onSubmit={submitForm}>
                {alert.show && (
                    <Alert {...alert} removeAlert={showAlert} list={list} />
                )}

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

            {list.length > 0 && (
                <div className="grocery-container">
                    <List
                        groceryItems={list}
                        deleteItem={deleteItem}
                        editItem={editItem}
                    />
                    <button className="clear-btn" onClick={clearList}>
                        Clear items
                    </button>
                </div>
            )}
        </section>
    );
}

export default App;
