import { getCategories } from "../../hooks/getCategories"
import { MainLayout } from "../../layout";

export const Search = () => {

  const { categories } = getCategories();

  return (
    <>
      <MainLayout>
        <h2 className="font-bold text-2xl mb-3">Categories</h2>
        <section className="overflow-scroll h-[620px]">
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
      </MainLayout>
    </>
  )
}
