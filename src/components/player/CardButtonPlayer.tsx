import { useRef } from "react";
import { Pause, Play } from "..";
import { useStore } from "../../store";

export const CardButtonPlayer = ({id, song}) => {

    const { isPlaying, setIsPlaying, currentSong, setCurrentSong } = useStore(state => state);
    const songRef = useRef("");

    const handleIsPlaying = () => {
        setCurrentSong({
            id: id
        });
        if(isPlaying) {
            songRef.current.pause();
        } else {
            songRef.current.play();
        }
        setIsPlaying(!isPlaying);
        // songRef.current.volume = 50;
    };

    const isPlayingPlaylist = isPlaying && currentSong?.id === id

    return (
        <>
            <button onClick={handleIsPlaying} className="hidden animate-fade-down group-hover:block group-hover:animate-fade-up bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 h-[50px] w-[50px] absolute top-36 right-6 rounded-full ">
                { (isPlayingPlaylist) ? <Pause /> : <Play />}
            </button>
            <audio ref={songRef} src={song}></audio>
        </>
  )
}
