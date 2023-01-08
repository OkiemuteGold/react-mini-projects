import React, { useState } from "react";
import Alert from "./Alert";
import List from "./List";
import DeleteModal from "./DeleteModal";

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
    const [isModalShown, setIsModalShown] = useState(false);
    const [isClearingList, setIsClearingList] = useState(false);

    // ---- function to show alert
    const showAlert = (show = false, type = "", message = "") => {
        // in es6 if parameter and property used is same, you can simply use one. i.e show: show, or show,
        setAlert({
            show, type, message,
        });
    }

    // ---- trap id and title of current item to edit
    const updateEditItem = (id = null, title = "") => {
        setCurrentEditItem({ id, title });
    }

    // ---- close modal
    const closeDeleteModal = () => {
        setIsModalShown(false);
    }

    // ---- show modal and trap id and title of current item
    const showDeleteModal = (id, title) => {
        setCurrentEditItem({ id, title });
        setIsClearingList(false);
        setIsModalShown(true);
    }

    // ---- handle submit
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

    // ---- edit item
    const editItem = (id, title) => {
        // console.log(id, title);
        const specificItem = list.find(item => item.id === id)

        setIsEditing(true);
        updateEditItem(id, title);
        setName(specificItem.title);
    }

    const handleModalAction = () => {
        if (isClearingList) {
            clearList();
        } else {
            deleteItem();
        }
        closeDeleteModal();
    }

    // ---- delete item
    const deleteItem = () => {
        const newList = list.filter(item => item.id !== currentEditItem.id);
        setList(newList);
        showAlert(true, "success", currentEditItem.title + " removed from list");
    }

    // ---- clear list
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
                        showDeleteModal={showDeleteModal}
                        editItem={editItem}
                    />
                    <button
                        className="clear-btn"
                        onClick={() => {
                            setIsClearingList(true);
                            setIsModalShown(true);
                        }}
                    >
                        Clear items
                    </button>

                    {isModalShown && (
                        <DeleteModal
                            title={currentEditItem.title}
                            handleModalAction={handleModalAction}
                            isClearingList={isClearingList}
                            closeDeleteModal={closeDeleteModal}
                        />
                    )}
                </div>
            )}
        </section>
    );
}

export default App;
