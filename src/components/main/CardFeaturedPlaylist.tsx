import { Link } from "react-router-dom";
import {  CardButtonPlayer } from "..";
import { getTracksFeatured } from "../../hooks/getTracksFeatured"
// import { usePlayer } from "../../hooks/usePlayer";

export const CardFeaturedPlaylist = ({id, name, descr, image, tracks}) => {

  const { urlTrack, handleUrlTrack } = getTracksFeatured();
  // const { player, handlePlayer } = usePlayer();

  // const handleSaveUrlTrack = (track) => {
  //   handleUrlTrack(track)
  // }

  // , url: {image} 

  return (
    <>
        <Link to={`/playlist/${id}`} state={{ id: {id}, name: {name} }} className="card-featured relative flex flex-col bg-[#181818] hover:bg-[#282828] transition-all duration-700 cursor-pointer p-4 rounded-md mb-3 group animate-fill-forwards animate-duration-1000">
            <img className="rounded-md" src={image} alt={name} width="100%" height="167px" />
            <h3 className="font-bold mt-3">{name}</h3>
            <span className="truncate text-[#6a6a6a] text-sm font-normal">{descr}</span>
            {/* <div className="opacity-0 absolute top-[7.5rem] right-10 h-[50px] w-[50px] group-hover:opacity-100 group-hover:block group-hover:animate-fade-up"> */}
              <CardButtonPlayer id={id} />
            {/* </div> */}
        </Link>
    </>
  )
}
