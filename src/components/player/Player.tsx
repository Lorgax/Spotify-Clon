import { Pause, Play } from ".."
import { usePlayer } from "../../hooks/usePlayer"

export const Player = () => {

  const { player, handlePlayer } = usePlayer();

  return (
    <>
        <footer className="col-span-4 row-span-1 text-center bg-[#121212] rounded-md mb-2 mx-2 text-white p-3">
            <button className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 h-[70px] w-[70px] rounded-full" onClick={handlePlayer}>
              {
                (player === "play") ? <Pause /> : <Play  />
              }
            </button>
        </footer>
    </>
  )
}
