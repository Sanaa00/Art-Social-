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
        path: 'Profile',
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
  return <RouterProvider router={routes} />
}

export default App
