const DeleteModal = ({ title, closeDeleteModal, deleteItem }) => {
    return (
        <div className="delete-modal">
            <div className="inner">
                <p className="alert">Are you sure you want to delete {title}?</p>

                <div className="buttons">
                    <button className="btn cancel" onClick={closeDeleteModal} >No</button>
                    <button className="btn accept" onClick={deleteItem} >Yes</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;