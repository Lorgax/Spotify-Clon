import axios from "axios";

const token = import.meta.env.VITE_TOKEN;

export const fetchDataPlaylist = async(id) => {

    const { data } = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    // console.log(data.tracks.items);

    const results = data.tracks.items.map( item => ({
        trackId: item.track.album.id,
        trackImage: item.track.album.images[1].url,
        trackArtist: item.track.artists.map( artist => artist.name + " "),
        trackAlbumName: item.track.name,
        trackName: item.track.album.name,
        trackDuration: item.track.duration_ms,
        trackReleasedDate: item.track.album.release_date,
        trackSong: item.track.preview_url
    }));

    // console.log(results);

    // const results = data.tracks.items.map( item => item.track );

    return results;
}
