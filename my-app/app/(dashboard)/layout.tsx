import React from 'react';
import Sidebar from '../components/Sidebar';
import { FaBarsStaggered } from 'react-icons/fa6';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<>
			<div className="drawer lg:drawer-open">
				<input type="checkbox" id="my-drawer-2" className="drawer-toggle" />
				<div className="drawer-content">
					<label htmlFor="my-drawer-2" className="drawer-button lg:hidden fixed top-6 right-6">
						<FaBarsStaggered className="w-8 h-8 text-primary" />
					</label>
					<div className="bg-base-200 px-8 py-12 min-h-screen">{children}</div>
				</div>
				<div className="drawer-side">
					{/* Overlay covers the screen when the sidebar is open */}
					<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
					<Sidebar />
				</div>
			</div>
			<Footer />
			<ToastContainer />
		</>
	);
};

export default Layout;
