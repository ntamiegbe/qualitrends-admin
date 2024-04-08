"use client";

import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import Icons from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

type ProjectsLayoutProps = {
	children: React.ReactNode;
};

const ProjectsLayout = ({ children }: ProjectsLayoutProps) => {
	const pathname = usePathname();

	const routes = [
		// {
		// 	name: "all projects",
		// 	path: "/projects/all-projects",
		// },
		{
			name: "ongoing projetcs",
			path: "/projects/ongoing-projects",
		},
		{
			name: "completed projects",
			path: "/projects/completed-projects",
		},
	];

	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			search: "",
		},
	});

	const {
		formState: { errors, isValid },
		watch,
	} = methods;

	return (
		<div>
			<div className='flex space-x-5 justify-between'>
				<div>
					<h1 className='text-2xl font-semibold'>Projects</h1>
					<div className='text-sm text-black-500 font-Roboto flex items-center space-x-3 mt-1'>
						<span>Dashboard</span>
						<span>
							<Icons.CaretIcon className='fill-black-900 transform -rotate-90' />
						</span>
						<span>Projects</span>
						<span>
							<Icons.CaretIcon className='fill-black-900 transform -rotate-90' />
						</span>
						<span className='capitalize text-primary'>
							{pathname.split("/")[2].replace("-", " ")}
						</span>
					</div>
					<div className='mt-6 font-semibold'>
						Data Summaries of Ongoing and Completed Projects
					</div>
				</div>
				<div className='space-y-6'>
					<div className='flex items-center space-x-6'>
						<FormProvider {...methods}>
							<form className='max-lg:max-w-[300px] lg:!ml-0 flex-1'>
								<div className='lg:w-[300px]'>
									<Input
										name='search'
										placeholder='Search'
										paddingLeft='pl-11'
										type='search'
										left={
											<div className='w-9 pl-3'>
												<Icons.SearchIcon />
											</div>
										}
									/>
								</div>
							</form>
						</FormProvider>
						<Button
							theme='plain'
							className='border text-black-500 h-[42px] border-[#5A5A5A33] rounded'>
							<div className='flex items-center space-x-2.5'>
								<Icons.FilterIcon />
								<div>Filter</div>
								<Icons.CaretIcon className='fill-black-500' />
							</div>
						</Button>
					</div>
					<div className='flex justify-end'>
						<Button className='w-[200px]'>
							<div className='flex items-center space-x-3'>
								<Icons.PlusIcon className='fill-white' />
								<div>Create Project</div>
							</div>
						</Button>
					</div>
				</div>
			</div>
			<ul className='mt-7 mb-10 flex items-center space-x-4 border-b border-[#CBCFD3] py-2'>
				{routes.map((route, index) => {
					return (
						<li key={index} className='relative'>
							<Link
								className={cn(
									"capitalize transition-all text-black-500 w-[200px] flex justify-center",
									{
										"font-semibold text-black-900": pathname.includes(
											route.path
										),
									}
								)}
								href={route.path}>
								{route.name}
							</Link>

							<div
								className={cn(
									"absolute left-1/2 transition-width transform -translate-x-1/2 -bottom-2.5 h-[3px] w-0 bg-primary",
									{
										"opacity-0": !pathname.includes(route.path),
										"w-2/4": pathname.includes(route.path),
									}
								)}
							/>
						</li>
					);
				})}
			</ul>
			<div>{children}</div>
		</div>
	);
};

export default ProjectsLayout;
