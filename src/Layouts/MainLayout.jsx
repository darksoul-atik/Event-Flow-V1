import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className='bg-cdark'>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className='max-w-screen-2xl min-h-screen  mx-auto'>
                
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