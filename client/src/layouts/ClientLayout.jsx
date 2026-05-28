import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MobileSidebar from "../components/layout/MobileSidebar";

export default function ClientLayout() {
  return (
    <>
      <Navbar />
      <MobileSidebar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
