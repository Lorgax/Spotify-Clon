import { Pause, Play } from '..'
import { useStore } from '../../store'

export const ButtonPlayer = ({id}) => {

    const { isPlaying, setIsPlaying, currentSong, setCurrentSong } = useStore(state => state);

    const handleIsPlaying = () => {
        // setCurrentSong({
        //     id: {
        //         id
        //     }
        // });
        setIsPlaying(!isPlaying);
    };

    const isPlayingPlaylist = isPlaying && currentSong?.id === id

    return (
        <>
            <button className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 h-[70px] w-[70px] rounded-full" onClick={handleIsPlaying}>
                {
                    (isPlaying) ? <Pause /> : <Play  />
                }
            </button>
        </>
    )
}
