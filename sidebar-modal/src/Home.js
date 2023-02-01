import { useGlobalContext } from './context'
import { FaBars } from "react-icons/fa";

const Home = () => {
    const data = useGlobalContext();
    console.log(data);

    return (
        <main>
            <button className="sidebar-toggle">
                <FaBars />
            </button>

            <button className="btn">show modal</button>
        </main>
    );
};

export default Home;
