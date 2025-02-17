import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import "./index.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [

    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
