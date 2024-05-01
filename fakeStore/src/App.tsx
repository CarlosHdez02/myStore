import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ItemsPage from "./pages/ItemsPage"

import Layout from "./Layout"
import ItemsDetail from "./pages/ItemsDetail"

const router = createBrowserRouter([
  {path:'/' ,element:<Layout/>, children:[
    {path:'/items', element: <ItemsPage/> },
    {path:'/:id', element: <ItemsDetail/>}
  ]},
  
])
function App() {


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
