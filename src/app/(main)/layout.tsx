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
			<div className='w-full lg:ml-[278px] lg:w-[calc(100%-278px)]'>
				<Header />
				<main className='bg-white max-lg:container lg:w-full min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-80px)] py-4 lg:p-7 mt-[72px] lg:mt-20'>
					{children}
				</main>
			</div>
		</section>
	);
};

export default Layout;
