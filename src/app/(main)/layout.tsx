"use client";

import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<section className='flex h-screen'>
			<Navigation />
			<div className='ml-[278px] w-[calc(100%-278px)]'>
				<Header />
				<main className='bg-white w-full min-h-[calc(100vh-72px)] p-7 mt-[72px]'>
					{children}
				</main>
			</div>
		</section>
	);
};

export default Layout;
