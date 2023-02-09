import React from "react"
import { useGlobalContext } from '../context'

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = React.useRef("");

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value);
        // console.log(searchValue.current.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    React.useEffect(() => {
        searchValue.current.focus();
    }, []);

    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>search your favorite cocktail</label>

                    <input
                        type='text'
                        name='name'
                        id='name'
                        aria-label="input cocktail"
                        ref={searchValue}
                        onChange={searchCocktail}
                    />
                </div>
            </form>
        </section>
    )
}

export default SearchForm
