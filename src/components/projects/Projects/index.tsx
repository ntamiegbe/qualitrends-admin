"use client";

import Button from "@/components/global/Button";
import Icons from "@/components/icons";
import Link from "next/link";

const Projects = () => {
	return (
		<div>
			<div className='lg:flex lg:space-x-5 lg:items-center justify-between'>
				<div>
					<h1 className='lg:text-2xl font-semibold'>Projects</h1>
					<div className='text-sm lg:text-sm text-black-500 font-Roboto flex items-center space-x-3 mt-1'>
						<Link href='/dashboard'>Dashboard</Link>
						<span>
							<Icons.CaretIcon className='fill-black-900 transform -rotate-90' />
						</span>
						<span className='text-primary '>Projects</span>
					</div>
				</div>
				<div className='space-y-4 lg:space-y-6 max-lg:mt-4'>
					<div className='flex justify-between items-center lg:justify-end'>
						<Button className='w-[200px] max-lg:h-9'>
							<div className='flex items-center space-x-3'>
								<Icons.PlusIcon className='fill-white' />
								<div>Create Project</div>
							</div>
						</Button>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default Projects;
