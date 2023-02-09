import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
    const { cocktails, loading, errorMessage } = useGlobalContext();

    console.log(cocktails);

    if (loading) {
        return <Loading />
    }

    if (errorMessage) {
        return (
            <h2 className='section-title'>
                {errorMessage}
            </h2>
        )
    }

    if (cocktails.length < 1) {
        return (
            <h2 className='section-title'>
                No cocktails matched your search criteria
            </h2>
        )
    }

    return (
        <section className='section'>
            <h2 className='section-title'>cocktails</h2>

            <div className='cocktails-center'>
                {cocktails.map((item) => {
                    return <Cocktail key={item.id} {...item} />
                })}
            </div>
        </section>
    )
}

export default CocktailList
