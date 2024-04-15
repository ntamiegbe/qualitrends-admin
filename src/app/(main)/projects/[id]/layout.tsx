"use client";

import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import SelectInput from "@/components/global/SelectInput";
import Icons from "@/components/icons";
import ProjectDetails from "@/components/projects/ProjectDetails";
import ProjectDetailsStats from "@/components/projects/ProjectDetailsStats";
import { cn, formatAmount } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

type ProjectDetailsLayoutProps = {
	children: React.ReactNode;
};

const ProjectDetailsLayout = ({ children }: ProjectDetailsLayoutProps) => {
	const pathname = usePathname();

	const params = useParams();

	const routes = [
		{
			name: "Inventory",
			path: `/projects/${params.id}/inventory`,
		},
		{
			name: "Incoming Inventory",
			path: `/projects/${params.id}/incoming-inventory`,
		},
		{
			name: "Outgoing Inventory",
			path: `/projects/${params.id}/outgoing-inventory`,
		},
		{
			name: "Purchase Order",
			path: `/projects/${params.id}/purchase-order`,
		},
		{
			name: "Expense Requests",
			path: `/projects/${params.id}/expense-requests`,
		},
	];

	const projectDetailsStatsData = [
		{
			label: "Initiation Date",
			value: "12 Jan 2022",
		},
		{
			label: "Completion Date",
			value: "12 Jan 2022",
		},
		{
			label: "20 Sep 2023",
			value: "12 Jan 2022",
		},
		{
			label: "Total Expenses",
			value: formatAmount(350000000, "NGN"),
		},
		{
			label: "Budget",
			value: formatAmount(350000000, "NGN"),
		},
		{
			label: "Total Income",
			value: formatAmount(350000000, "NGN"),
		},
		{
			label: "Cash Balance",
			value: formatAmount(350000000, "NGN"),
		},
		{
			label: "Total Units",
			value: "2 of 7",
		},
	];

	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			search: "",
		},
	});

	const {
		formState: { errors },
		watch,
	} = methods;

	return (
		<div>
			<div className='lg:flex lg:space-x-5 justify-between'>
				<div>
					<h1 className='lg:text-2xl font-semibold'>Projects</h1>
					<div className='text-sm lg:text-sm text-black-500 font-Roboto flex items-center space-x-3 mt-1'>
						<Link href='/dashboard'>Dashboard</Link>
						<span>
							<Icons.CaretIcon className='fill-black-900 transform -rotate-90' />
						</span>
						<Link href='/projects'>Projects</Link>
						<span>
							<Icons.CaretIcon className='fill-black-900 transform -rotate-90' />
						</span>
						<span className='capitalize text-primary'>Project Details</span>
					</div>
					<div className='flex items-center space-x-2 mt-2 max-lg:mt-4'>
						<div className='text-xs'>Showing data for:</div>
						<div className='w-[205px]'>
							<FormProvider {...methods}>
								<SelectInput
									name='route'
									options={[
										{
											name: "Project 1",
											value: "/projects/CPD1",
										},
										{
											name: "Project 2",
											value: "/projects/CPD2",
										},
										{
											name: "Project 3",
											value: "/projects/CPD3",
										},
									]}
									optionComponent={(option, selectedOption) => {
										return (
											<div
												className={cn(
													"py-2 w-full border-b px-4 flex items-center space-x-5 text-tc-main hover:bg-[#FF69001A]",
													{
														"bg-[#FF69001A]":
															option?.value === selectedOption?.value,
													}
												)}>
												<div className='w-full text-sm flex items-center space-x-2'>
													<div>{option?.name}</div>
												</div>

												{option?.name === selectedOption?.name && (
													<div>
														<Icons.SelectedIcon />
													</div>
												)}
											</div>
										);
									}}
									trigger={(selected) => {
										return (
											<div className='flex h-min bg-transparent items-center space-x-1'>
												{selected ? (
													<div className='text-tc-main flex space-x-2 items-center text-sm'>
														<span>{selected.name}</span>
													</div>
												) : (
													<div className='text-sm mt-[2px] text-tc-secondary'>
														Select Project
													</div>
												)}
											</div>
										);
									}}
								/>
							</FormProvider>
						</div>
					</div>
				</div>
				<div className='space-y-4 lg:space-y-6 max-lg:mt-4'>
					<div className='flex justify-between space-x-6 items-center'>
						<Button className='w-[200px] max-lg:h-9'>
							<div className='flex items-center space-x-3'>
								<Icons.PlusIcon className='fill-white' />
								<div>Create Request</div>
							</div>
						</Button>
						<Button theme='outline' className='w-[200px] max-lg:h-9'>
							Change Status
						</Button>
					</div>
				</div>
			</div>
			<div className='mt-6'>
				<ProjectDetailsStats data={projectDetailsStatsData} />
			</div>
			<div className='mt-6 py-5'>
				<ProjectDetails />
			</div>
			<ul className='mt-7 mb-10 flex items-center space-x-4 border-b border-[#CBCFD3] py-2'>
				{routes.map((route, index) => {
					return (
						<li key={index} className='relative max-lg:w-1/2'>
							<Link
								className={cn(
									"capitalize max-lg:text-sm transition-all text-black-500 lg:w-[200px] flex justify-center",
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
			<div className='mb-6'>
				<FormProvider {...methods}>
					<form className='lg:!ml-0 flex-1'>
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
			</div>
			<div>{children}</div>
		</div>
	);
};

export default ProjectDetailsLayout;
