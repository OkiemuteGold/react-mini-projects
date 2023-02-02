import { useGlobalContext } from './context'
import { FaBars } from "react-icons/fa";

const Home = () => {
    const data = useGlobalContext();
    console.log(data);

    return (
        <main>
            <button className="sidebar-toggle" onClick={data.openSidebar}>
                <FaBars />
            </button>

            <button className="btn" onClick={data.openModal}>show modal</button>
        </main>
    );
};

export default Home;
