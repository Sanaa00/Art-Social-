import { createBrowserRouter } from "react-router-dom";

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
   <>hello</>
  )
}

export default App
