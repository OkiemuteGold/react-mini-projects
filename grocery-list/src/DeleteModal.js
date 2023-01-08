const DeleteModal = ({ title, closeDeleteModal, handleModalAction, isClearingList }) => {
    return (
        <div className="delete-modal">
            <div className="inner">
                <p className="alert">
                    {isClearingList ? "Are you sure you want to clear list" : `Are you sure you want to delete ${title}?`}
                </p>

                <div className="buttons">
                    <button className="btn cancel" onClick={closeDeleteModal} >No</button>
                    <button className="btn accept" onClick={handleModalAction} >Yes</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;