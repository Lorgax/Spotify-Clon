import { Player, Sidebar } from ".."
import { getCategories } from "../../hooks/getCategories"

export const Search = () => {

  const { categories } = getCategories();

  return (
    <>
        <Sidebar />
        <main className="col-span-3 row-span-6 bg-[#121212] rounded-md text-white my-2 mx-2 p-4">
            <h2 className="font-bold text-2xl mb-3">Categories</h2>
            <section className="overflow-scroll h-[700px]">
              <div className="grid grid-cols-5 gap-2">
                {
                  categories.map( category => (
                    <div className="relative w-full text-center" key={category.id}>
                      <img className="rounded-md" src={category.img} alt={category.name} />
                      <span className="font-bold w-full absolute top-36 m-auto left-0 right-0 ">{ category.name }</span>
                    </div>
                  ))
                }
              </div>
            </section>
        </main>
        <Player />
    </>
  )
}
