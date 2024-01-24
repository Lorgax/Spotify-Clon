import axios from "axios";

const token = import.meta.env.VITE_TOKEN;

export const spotiAPI = async() => {
    const { data } = await axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            limit: 10,
            country: "US"
        }
    });

    // data.playlists.items.map( item => console.log(item.tracks.href))

    const results = data.playlists.items.map( item => ({
        id: item.id,
        name: item.name,
        descr: item.description,
        imgs: item.images.map( image => image.url),
        tracks: item.tracks.href
    }))

    return results;
}
