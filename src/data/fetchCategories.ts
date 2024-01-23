import axios from "axios"

const token = import.meta.env.VITE_TOKEN;

export const fetchCategories = async() => {

    const { data } = await axios.get("https://api.spotify.com/v1/browse/categories", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            country: "ES"
        }
            
    })

    // console.log(data);
    // data.categories.items.map(({icons}) => (
    //     icons.map( icon => console.log(icon.url))
    // ))
    const results = data.categories.items.map( item => ({
        id: item.id,
        name: item.name,
        img: item.icons.map( icon => icon.url)
    }));

    return results;
}
