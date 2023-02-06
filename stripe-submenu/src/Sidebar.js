import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <div
            className={`
                ${isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}
            `}
        >
            <aside className="sidebar">
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>

                <div className="sidebar-links">
                    {sublinks.map((item, index) => {
                        const { page, pageUrl, links } = item;

                        return (
                            <article key={index}>
                                <h4>
                                    <a href={pageUrl} className='link-btn'>
                                        {page}
                                    </a>
                                </h4>

                                {links.length > 0 && <div className="sidebar-sublinks">
                                    {links.map((link, index) => {
                                        const { url, icon, label } = link;

                                        return (
                                            <a key={index} href={url}>
                                                {icon}
                                                {label}
                                            </a>
                                        );
                                    })}
                                </div>}
                            </article>
                        );
                    })}
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
