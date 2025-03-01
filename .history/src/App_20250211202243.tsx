import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Feed from "./router/Feed";
import Friend from "./router/Friend";
import Message from "./router/Message";

const router =createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
   <RouterProvider router={router}/>
  )
}

export default App
