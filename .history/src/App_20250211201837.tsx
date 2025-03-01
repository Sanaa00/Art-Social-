import { createBrowserRouter, Router } from "react-router-dom";

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
   <Router router={router}></Router>>
  )
}

export default App
