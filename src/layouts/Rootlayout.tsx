import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // Your separate navbar component

export default function RootLayout() {
  return (
    <div className="app-layout">
      <Navbar /> {/* Stays permanently visible at the top */}
      <main className="content-area">
        <Outlet /> {/* Child pages (Home, About, etc.) render right here */}
      </main>
    </div>
  );
}
