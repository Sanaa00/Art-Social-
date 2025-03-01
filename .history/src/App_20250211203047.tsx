import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./router/Feed";
import Friend from "./router/Friend";
import Message from "./router/Message";
import Home from "./router/Home";

const routes =createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
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


]);
function App() {


  return (<><RouterProvider router={routes} />
    <Feed/></>
    
  )
}

export default App
