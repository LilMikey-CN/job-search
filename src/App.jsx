import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import "./index.css"
import RootLayout from "./pages/Root"
import ProfilePage from "./pages/ProfilePage"
import SettingsPage from "./pages/SettingsPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'settings', element: <SettingsPage /> },
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
