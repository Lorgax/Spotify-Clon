
export const CardFeaturedPlaylist = ({name, descr, image}) => {
  return (
    <>
        <div className="flex flex-col bg-[#181818] hover:bg-[#282828] transition-all duration-700 cursor-pointer p-4 rounded-md mb-3">
            <img className="rounded-md" src={image} alt={name} width="100%" height="167px" />
            <h3 className="font-bold mt-3">{name}</h3>
            <span className="truncate text-[#6a6a6a] text-sm font-normal">{descr}</span>
        </div>
    </>
  )
}
