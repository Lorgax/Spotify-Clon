import { useState } from "react"
import { fetchDataPlaylist } from "../data/fetchDataPlaylist";

export const getDataPlaylist = () => {

    const [dataPlaylist, setDataPlaylist] = useState([])

    const handleDataPlaylist = async(id) => {
        const data = await fetchDataPlaylist(id);
        setDataPlaylist(data);
    };

    return {
        dataPlaylist,
        handleDataPlaylist
    }
}
