import { CardFeaturedPlaylist } from ".";
import { useFetchApi } from "../../hooks/useFetchApi"

export const Main = () => {
  const { featuredPlaylist } = useFetchApi();

  return (
    <>
        <main className="col-span-3 row-span-6 bg-[#121212] rounded-md text-white my-2 mx-2 p-4">
            <h2 className="font-bold text-2xl mb-3">Featured Playlists</h2>
            <div className="grid grid-cols-5 gap-2">
              {
                featuredPlaylist.map( ({id, name, descr, imgs}) => (
                  <CardFeaturedPlaylist key={id} name={name} descr={descr} image={imgs} />
                ))
              }
            </div>
        </main>
    </>
  )
}
