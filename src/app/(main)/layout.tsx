"use client";

import Navigation from "@/components/layout/Navigation";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<section className='flex h-screen'>
			<Navigation />
			<div className='ml-[218px] w-[calc(100%-218px)]'>
				{/* <Header /> */}
				<main className='bg-[#F7F6F6] w-full min-h-[calc(100vh-68px)] p-7 mt-[68px]'>
					{children}
				</main>
			</div>
		</section>
	);
};

export default Layout;
