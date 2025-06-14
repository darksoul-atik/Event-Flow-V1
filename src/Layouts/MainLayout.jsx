import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="bg-cdark">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="dark"
        toastClassName="bg-[#1e2835] text-[#f5eddf] border border-[#f99e72] rounded-lg shadow-md"
        bodyClassName="text-sm font-medium flex items-center"
        progressClassName="bg-[#f99e72]"
      />
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="max-w-screen-2xl min-h-screen  mx-auto">
        <section>
          <Outlet></Outlet>
        </section>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
