import React from 'react';
import Sidebar from '../components/Sidebar';
import { FaBarsStaggered } from 'react-icons/fa6';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import { SessionProvider } from '../components/AuthProvider';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<>
			<SessionProvider>
				<div className="drawer lg:drawer-open">
					<input type="checkbox" id="my-drawer-2" className="drawer-toggle" />
					<div className="drawer-content">
						<label htmlFor="my-drawer-2" className="drawer-button lg:hidden fixed top-6 right-6 z-50 p-2 bg-slate-50/50 rounded-xl">
							<FaBarsStaggered className="w-8 h-8 text-primary" />
						</label>
						<div className="bg-base-200 px-8 py-8 min-h-screen">{children}</div>
					</div>
					<div className="drawer-side">
						{/* Overlay covers the screen when the sidebar is open */}
						<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
						<Sidebar />
					</div>
				</div>
				<Footer />
				<ToastContainer />
			</SessionProvider>
		</>
	);
};

export default Layout;
