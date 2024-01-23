import axios from "axios";

const token = import.meta.env.VITE_TOKEN;

export const spotiAPI = async() => {
    const { data } = await axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    // console.log(data.playlists.items[1].images);

    const results = data.playlists.items.map( item => ({
        id: item.id,
        name: item.name,
        descr: item.description,
        imgs: item.images.map( image => image.url)
    }))

    return results;
}
