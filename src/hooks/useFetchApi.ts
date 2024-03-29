import { useEffect, useState } from "react";
import { spotiAPI } from "../data/spotiAPI";

export const useFetchApi = () => {

    const [featuredPlaylist, setFeaturedPlaylist] = useState([]);

    const getFeaturedPlaylists = async() => {
        const playlists = await spotiAPI();
        setFeaturedPlaylist(playlists);
    };

    useEffect( () => {
        getFeaturedPlaylists();
    
    }, [] );

    return {
        featuredPlaylist
    }
}
