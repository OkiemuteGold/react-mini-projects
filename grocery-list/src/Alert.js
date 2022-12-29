import { useEffect } from 'react'

const Alert = ({ type, message, removeAlert }) => {
    useEffect(() => {
        const alert = setTimeout(() => {
            removeAlert();
        }, 3000);

        return () => {
            clearTimeout(alert);
        };
    }, [])

    return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;
