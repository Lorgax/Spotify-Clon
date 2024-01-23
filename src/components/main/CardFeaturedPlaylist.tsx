
export const CardFeaturedPlaylist = ({name, descr, image}) => {
  return (
    <>
        <div className="flex flex-col">
            <img className="rounded-md" src={image} alt={name} width="167px" height="167px" />
            <h3 className="font-bold">{name}</h3>
            <span className="truncate">{descr}</span>
        </div>
    </>
  )
}
