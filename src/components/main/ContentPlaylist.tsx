import { useLocation } from "react-router-dom";
import { Player, Sidebar } from ".."
import { getDataPlaylist } from "../../hooks/getDataPlaylist"
import { useEffect } from "react";

export const ContentPlaylist = () => {

    const { dataPlaylist, handleDataPlaylist } = getDataPlaylist();
    const { state } = useLocation();
    // console.log(state.id.id);
    let count = 1;

    const handleInfoDataPlaylist = (id) => {
        handleDataPlaylist(id)
    }

    useEffect(() => {
      handleInfoDataPlaylist(state.id.id)
    }, []);
    

    return (
        <>
            <Sidebar />
            <main className="overflow-scroll col-span-3 row-span-6 bg-[#121212] rounded-md text-white my-2 mx-2 p-4">
                <h2 className="font-bold text-xs mb-3">List</h2>
                <h3 className="font-bold text-5xl mb-3">Playlist's name</h3>
                <table className="table w-full rounded-md">
                    <thead >
                        <td className="font-light text-white/80 text-sm">#</td>
                        <td className="font-light text-white/80 text-sm">Title</td>
                        <td className="font-light text-white/80 text-sm">Album</td>
                        <td className="font-light text-white/80 text-sm">Released date</td>
                        <td className="font-light text-white/80 text-sm">Duration</td>
                    </thead>
                    <tbody>
                        {
                            dataPlaylist.map( data => (
                                <tr className="h-[60px] hover:bg-gray-400/50 hover:cursor-pointer transition-all ease-in-out duration-700 rounded-md">
                                    <td className="text-white/80">{count++}</td>
                                    <td>
                                        <div className="flex">
                                            <img width="40px" height="40px" className="rounded-md me-2" src={data.trackImage} alt={data.trackName} />
                                            <div className="flex flex-col">
                                                <span className="font-bold text-sm truncate">{data.trackAlbumName}</span>
                                                <span className="text-white/80 text-xs">{data.trackArtist}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-xs text-white/80 truncate">{data.trackName}</td>
                                    <td>{data.trackReleasedDate}</td>
                                    <td>{data.duration}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </main>
            <Player />
        </>
    )
}
