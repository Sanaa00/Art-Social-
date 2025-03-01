import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

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
        element:<Message/>
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
