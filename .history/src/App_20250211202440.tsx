import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./router/Feed";
import Friend from "./router/Friend";
import Message from "./router/Message";

const routes =createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/feed",
        element:<Feed/>
      },
       {
        path: "/friend",
        element:<Friend/>
      },
         {
        path: "/message",
        element:<Message  />
      }
    ]
    
   },

//   {
// -    path: "dashboard/*",
// -    element: <Dashboard />,
// +    path: "dashboard",
// +    children: [{ path: "*", element: <Dashboard /> }],
//   },
]);
function App() {


  return (
   <RouterProvider router={routes}/>
  )
}

export default App
