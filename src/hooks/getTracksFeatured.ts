import { useState } from "react"
import { fetchTracksFeatured } from "../data/fetchTracksFeatured";

export const getTracksFeatured = () => {

    const [urlTrack, setUrlTrack] = useState("");

    const handleUrlTrack = (url) => {
        setUrlTrack(url);
        fetchTracksFeatured(urlTrack);
    }

    return {
        urlTrack,
        handleUrlTrack
    } 
}
