import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Feed from './router/Feed'
import Friend from './router/Friend'
import Message from './router/Message'
import Home from './router/Home'
import Sidbar from './component/sidbar/Sidbar'
import './style/home.style.scss'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Feed />,
      },
      {
        path: 'friend',
        element: <Friend />,
      },
      {
        path: 'message',
        element: <Message />,
      },
    ],
  },
])
function App() {
  return (
    <div className="container">
      {/* <>
        <Sidbar />
        <Outlet />
      </> */}
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
