const Menu = ({ items }) => {
    return (
        <div className="section-center">
            {
                items.map(item => {
                    const { id, title, price, img, desc } = item;

                    return <article className="menu-item" key={id} >
                        <div className="photo-wrapper">
                            <img src={img} alt={title} className="photo" />
                        </div>

                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h4 className="price">${price}</h4>
                            </header>

                            <p className="item-text">{desc}</p>
                        </div>
                    </article>
                })
            }
        </div>
    )
};

export default Menu;
