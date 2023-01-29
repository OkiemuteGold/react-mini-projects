import { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, socials } from './data'
import logo from './logo.svg'

const Navbar = () => {
    const [showMobileLinks, setShowMobileLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        // console.log(linksHeight);

        showMobileLinks ? linksContainerRef.current.style.height = `${linksHeight}px` : linksContainerRef.current.style.height = "0px";
    }, [showMobileLinks]);

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" />
                    <button className="nav-toggle" onClick={() => setShowMobileLinks(!showMobileLinks)}>
                        <FaBars />
                    </button>
                </div>

                <div className="links-container"
                    ref={linksContainerRef}
                >
                    <ul className="links" ref={linksRef}>
                        {
                            links.map(link => {
                                const { id, url, text } = link;

                                return <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            })
                        }
                    </ul>
                </div>

                <ul className="social-icons">
                    {
                        socials.map(link => {
                            const { id, url, icon } = link;

                            return <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
