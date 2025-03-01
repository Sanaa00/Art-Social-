import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Feed from './router/Feed'
import Profile from './router/Profile'
import Message from './router/Message'
import Home from './router/Home'

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
        element: <Profile />,
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
