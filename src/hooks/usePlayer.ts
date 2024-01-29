import { useStore } from "../store/useStore";

export const usePlayer = () => {
  
    const { isPlaying, setIsPlaying } = useStore(state => state)

    const handlePlayer = () => {
        if(isPlaying) {
            setIsPlaying(false); 
        } else {
            setIsPlaying(true);
        }
    }

    return {
        isPlaying,
        handlePlayer
    }
}
