import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("a");
    const [cocktails, setCocktails] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchDrinks = useCallback(async () => {
        setLoading(true);

        try {
            const response = await fetch(`${url}${searchTerm}`);
            const data = await response.json();
            const { drinks } = data;

            if (drinks) {
                const newCocktails = drinks.map(item => {
                    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass
                    }
                });

                setCocktails(newCocktails);
            } else {
                setCocktails([])
            }

            // console.log(data);
            setLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchDrinks();

    }, [searchTerm, fetchDrinks]);

    const contextValues = {
        loading,
        searchTerm,
        cocktails,
        setSearchTerm,
        errorMessage
    }

    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
