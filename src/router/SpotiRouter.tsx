import { Route, Routes } from "react-router-dom"
import { Main, Search } from "../components"

export const SpotiRouter = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
        </Routes>
    </>
  )
}
