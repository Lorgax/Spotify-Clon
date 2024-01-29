import { CardFeaturedPlaylist } from ".";
import { useFetchApi } from "../../hooks/useFetchApi"
import { MainLayout } from "../../layout";

export const Main = () => {
  const { featuredPlaylist } = useFetchApi();

  return (
    <>  
      <MainLayout >
        <h2 className="font-bold text-2xl mb-3">Featured Playlists</h2>
        <div className="grid grid-cols-5 gap-2">
          {
            featuredPlaylist.map( ({id, name, descr, imgs, tracks}) => (
              <CardFeaturedPlaylist key={id} id={id} name={name} descr={descr} image={imgs} tracks={tracks} />
            ))
          }
        </div>
      </MainLayout>
    </>
  )
}
