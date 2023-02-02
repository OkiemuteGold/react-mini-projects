import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Modal = () => {
    const { isModalOpen, closeModal } = useGlobalContext();

    if (isModalOpen) {
        return <div className={`modal-overlay`}>
            <div className="modal-container">
                <h3>modal content</h3>

                <button className="close-modal-btn" onClick={closeModal}>
                    <FaTimes />
                </button>
            </div>
        </div>
    }
}

export default Modal
