import { Outlet, createBrowserRouter } from "react-router-dom"
import Body from "./components/Body"
import MainContainer from "./components/MainContainer"
import DetailedNews from "./components/DetailedNews"
import SearchResults from "./components/SearchResults"
import Navbar from "./components/Navbar"

export const appRouter = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    path: "/",
    element: <Body />,
    children: [
      {
      path: "/",
      element: <MainContainer />,
      },
      {
        path: "/news/:title",
        element: <DetailedNews />,
      },
      {
        path: "/results",
        element: <SearchResults />,
      },
  ]
  }]
}])

function App() {


  return (
    <>
     <Navbar />
     <Outlet />
    </>
   
  )
}

export default App
