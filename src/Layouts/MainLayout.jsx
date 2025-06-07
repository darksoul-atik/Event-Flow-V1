import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main>
                <section>
                    <Outlet></Outlet>
                </section>
            </main>

            <footer>
                
            </footer>
        </div>
    );
};

export default MainLayout;