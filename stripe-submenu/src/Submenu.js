import { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
    const {
        isSubmenuOpen,
        page: { page, pageUrl, links },
        location,
    } = useGlobalContext();

    const container = useRef(null);
    const [columns, setColumns] = useState('col-2');

    useEffect(() => {
        setColumns('col-2');
        const submenuContainer = container.current;
        const { center, bottom } = location;

        submenuContainer.style.left = `${center}px`;
        submenuContainer.style.top = `${bottom}px`;

        // console.log(page, pageUrl, links, location);

        if (links.length === 3) {
            setColumns('col-3')
        }

        if (links.length > 3) {
            setColumns('col-4')
        }
    }, [page, pageUrl, location, links]);

    return (
        <aside
            className={`
                ${isSubmenuOpen ? "submenu show" : "submenu"}
            `}
            ref={container}
        >
            <section>
                <h4>{page}</h4>

                <div className={`submenu-center ${columns}`}>
                    {links.map((link, index) => {
                        const { url, icon, label } = link;

                        return (
                            <a key={index} href={pageUrl + url}>
                                {icon}
                                {label}
                            </a>
                        )
                    })}
                </div>
            </section>
        </aside>
    )
}

export default Submenu
