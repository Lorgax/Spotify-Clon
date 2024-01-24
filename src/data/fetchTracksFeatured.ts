import axios from "axios";

const token = import.meta.env.VITE_TOKEN;


export const fetchTracksFeatured = async(trackUrl) => {

    const { data } = await axios.get(`${trackUrl}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    data.items.map( item => console.log(item.track.preview_url) );

    const results = data.items.map( item => item.track.preview_url );

    return results;
}
