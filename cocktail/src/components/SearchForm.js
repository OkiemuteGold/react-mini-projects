import { useGlobalContext } from '../context'

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();

    return (
        <section className='section search'>
            <form className='search-form'>
                <div className='form-control'>
                    <label htmlFor='name'>search your favorite cocktail</label>

                    {/* <input
                        type='text'
                        name='name'
                        id='name'
                        ref={searchValue}
                        onChange={searchCocktail}
                    /> */}
                </div>
            </form>
        </section>
    )
}

export default SearchForm
