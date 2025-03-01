import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// const router =createBrowserRouter([
//   { path: "/", element: <App /> },
// //   {
// // -    path: "dashboard/*",
// // -    element: <Dashboard />,
// // +    path: "dashboard",
// // +    children: [{ path: "*", element: <Dashboard /> }],
// //   },
// ]);