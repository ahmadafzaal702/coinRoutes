import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from '../components/layout/Navbar';

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));
import TestPage from '../pages/TestPage';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <NavBar />
            <Suspense fallback={<div>Loading...</div>}>
                <main className='bg-primary text-white'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/test" element={<TestPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </Suspense>
        </Router>
    );
};

export default AppRoutes;
