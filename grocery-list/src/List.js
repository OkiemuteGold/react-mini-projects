import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ groceryItems, deleteItem, editItem }) => {
    return (
        <div className="grocery-list">
            {groceryItems.map((item) => {
                const { id, title } = item;

                return (
                    <article className="grocery-item" key={id}>
                        <p className="title">{title}</p>

                        <div className="btn-container">
                            <button
                                type="button"
                                className="edit-btn"
                                onClick={() => editItem(id, title)}
                            >
                                <FaEdit />
                            </button>
                            <button
                                type="button"
                                className="delete-btn"
                                onClick={() => deleteItem(id, title)}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default List;