import { create } from "zustand";

export const useStore = create((set) => ({
    isPlaying: false,
    currentSong: {
        id: null,
        song: ""
    },
    setIsPlaying: (isPlaying) => set({isPlaying}),
    setCurrentSong: (currentSong) => set({currentSong})
}));
