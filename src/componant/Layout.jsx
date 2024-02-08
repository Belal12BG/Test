import React from "react";
import { Outlet } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import Footer2 from "./Footer2";
export default function Layout() {
  return (
    <div>
      <Navbar2 />
      <Outlet />
      <Footer />
      <Footer2 />
    </div>
  );
}
