import React from "react"
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
    const { id } = useParams();
    const [loading, setLoading] = React.useState(false);
    const [cocktail, setCocktail] = React.useState(null);

    const fetchSingleCocktail = async () => {
        setLoading(true);

        try {
            const response = await fetch(url + id);
            const data = await response.json();

            if (data.drinks) {
                const {
                    strDrink: name,
                    strDrinkThumb: image,
                    strAlcoholic: info,
                    strCategory: category,
                    strGlass: glass,
                    strInstructions: instructions,
                    strIngredient1: ingredient1,
                    strIngredient2: ingredient2,
                    strIngredient3: ingredient3,
                    strIngredient4: ingredient4,
                    strIngredient5: ingredient5,
                } = data.drinks[0];

                const ingredients = [
                    ingredient1,
                    ingredient2,
                    ingredient3,
                    ingredient4,
                    ingredient5,
                ];

                const newSingleCocktail = {
                    name,
                    image,
                    info,
                    category,
                    glass,
                    instructions,
                    ingredients,
                };

                setCocktail(newSingleCocktail);
            } else {
                setCocktail(null);
            }

            // console.log(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    React.useEffect(() => {
        fetchSingleCocktail();
    }, [id]);

    if (loading) {
        return <Loading />
    }

    if (!cocktail) {
        return <h2 className="section-title">no cocktail details available</h2>
    }

    const {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
    } = cocktail;

    return (
        <section className='section cocktail-section'>
            <Link to='/' className='btn btn-primary'>
                back home
            </Link>

            <h2 className='section-title'>{name}</h2>

            <div className='drink'>
                <img src={image} alt={name}></img>

                <div className='drink-info'>
                    <p>
                        <span className='drink-data'>name :</span> {name}
                    </p>
                    <p>
                        <span className='drink-data'>category :</span> {category}
                    </p>
                    <p>
                        <span className='drink-data'>info :</span> {info}
                    </p>
                    <p>
                        <span className='drink-data'>glass :</span> {glass}
                    </p>
                    <p>
                        <span className='drink-data'>instructons :</span> {instructions}
                    </p>
                    <p>
                        <span className='drink-data'>ingredients :</span>
                        {ingredients.map((item, index) => {
                            return item ? <span className="ingredients" key={index}>{item}</span> : null
                        })}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SingleCocktail
