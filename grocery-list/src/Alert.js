import { useEffect } from "react";

const Alert = ({ type, message, removeAlert, list }) => {
    useEffect(() => {
        const alert = setTimeout(() => {
            removeAlert();
        }, 3000);

        return () => {
            clearTimeout(alert);
        };
    }, [list]);

    return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;
