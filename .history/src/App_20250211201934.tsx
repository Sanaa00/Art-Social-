import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

const router =createBrowserRouter([
  { path: "/", element: <App /> },
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
