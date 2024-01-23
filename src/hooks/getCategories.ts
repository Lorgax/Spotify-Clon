import { useEffect, useState } from "react"
import { fetchCategories } from "../data/fetchCategories";

export const getCategories = () => {
  
    const [categories, setCategories] = useState([]);

    const getCategoriesFromAPI = async() => {

        const cats = await fetchCategories();
        setCategories(cats);

    }

    useEffect(() => {
        getCategoriesFromAPI();
    }, [])
    
  
    return {
        categories
    }
}
