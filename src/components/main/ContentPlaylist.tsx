import { useLocation } from "react-router-dom";
import { CardButtonPlayer } from ".."
import { getDataPlaylist } from "../../hooks/getDataPlaylist"
import { useEffect, useRef } from "react";
import { useStore } from "../../store/";
import { MainLayout } from "../../layout";


export const ContentPlaylist = () => {

    const { dataPlaylist, handleDataPlaylist } = getDataPlaylist();
    const { state } = useLocation();
    let count = 1;

    const handleInfoDataPlaylist = (id) => {
        handleDataPlaylist(id)
    }

    useEffect(() => {
      handleInfoDataPlaylist(state.id.id)
    }, []);

    //style={{backgroundImage: `url(${state.image.image})`}}

    return (
        <>
        <MainLayout>
            <section className="overflow-scroll h-[650px]">
                <div className="h-80 relative" >
                    <div className="absolute bottom-6">
                        <h2 className="font-medium text-sm mb-3">List</h2>
                        <h3 className="font-bold text-7xl mb-3">{state.name.name}</h3>
                    </div>
                </div>
                <table className="table w-full rounded-md">
                    <thead >
                        <td className="font-light text-white/80 text-sm w-24 text-center">#</td>
                        <td className="font-light text-white/80 text-sm">Title</td>
                        <td className="font-light text-white/80 text-sm">Album</td>
                        <td className="font-light text-white/80 text-sm">Released date</td>
                        <td className="font-light text-white/80 text-sm">Duration</td>
                    </thead>
                    <tbody>
                        {
                            dataPlaylist.map( data => (
                                <tr key={data.trackAlbumName} className="h-[60px] group animate-fill-forwards hover:bg-gray-400/50 hover:cursor-pointer transition-all ease-in-out duration-700 rounded-md">
                                    <td className="text-white/80 px-3 w-24 text-center">
                                        <span className="group-hover:hidden">
                                            {count++}
                                        </span>
                                        <div className="button-single-song">
                                            <CardButtonPlayer id={data.trackId} song={data.trackSong} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex">
                                            <img width="40px" height="40px" className="rounded-md me-2" src={data.trackImage} alt={data.trackName} />
                                            <div className="flex flex-col">
                                                <span className="font-bold text-sm truncate w-40">{data.trackAlbumName}</span>
                                                <span className="text-white/80 text-xs">{data.trackArtist}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="flex text-xs text-white/80">
                                        <span className="truncate w-40">
                                            {data.trackName}
                                        </span>
                                    </td>
                                    <td className="text-white/80 text-xs">{data.trackReleasedDate}</td>
                                    <td>{data.duration}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </MainLayout>
        </>
    )
}
