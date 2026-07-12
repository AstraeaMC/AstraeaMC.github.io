import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/Rootlayout";
import Home from "./pages/Home";
import Downloads from "./pages/Downloads.tsx";
import About from "./pages/About.tsx";
import Docs from "./pages/Docs.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // The layout wraps everything below
    children: [
      { index: true, element: <Home /> }, // Matches '/'
      { path: "downloads", element: <Downloads /> }, // Matches '/dashboard'
      { path: "docs", element: <Docs /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
