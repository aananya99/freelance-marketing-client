import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
<div>
  <header>
    <Navbar></Navbar>
     </header>
    <main>
      <Outlet></Outlet>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
 <Toaster></Toaster>
</div>
  );
};

export default MainLayout;
