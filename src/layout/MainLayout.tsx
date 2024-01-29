import { Player, Sidebar } from "../components"

export const MainLayout = ({children}) => {
  return (
    <>
        <Sidebar />
        <main className="col-span-6 md:col-span-3 md:row-span-6 bg-[#121212bf] rounded-md text-white my-2 mx-2 p-4">
            {children}
        </main>
        <Player />
    </>
  )
}
