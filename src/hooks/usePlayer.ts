import { useState } from "react"

export const usePlayer = () => {
  
    const [player, setPlayer] = useState("pause")

    const handlePlayer = () => {
        if(player === "play") {
            setPlayer("pause"); 
        } else {
            setPlayer("play");
        }
    }

    return {
        player,
        handlePlayer
    }
}
