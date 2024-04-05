"use client";

import Navigation from "@/components/layout/Navigation";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<section className='flex h-screen'>
			<Navigation />
			<div className='ml-[278px] w-[calc(100%-278px)]'>
				<header className='h-[72px] px-8 py-4 fixed top-0 right-0 w-[calc(100%-278px)] shadow-sm'>
					hello
				</header>
				<main className='bg-white w-full min-h-[calc(100vh-72px)] p-7 mt-[72px]'>
					{children}
				</main>
			</div>
		</section>
	);
};

export default Layout;
