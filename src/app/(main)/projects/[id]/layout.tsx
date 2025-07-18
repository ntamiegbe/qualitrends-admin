"use client";

import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import SelectInput from "@/components/global/SelectInput";
import Tab from "@/components/global/Tab";
import Icons from "@/components/icons";
import ChangeStatusModal from "@/components/projects/ChangeStatusModal";
import CreateRequestModal from "@/components/projects/CreateRequestModal";
import ProjectDetails from "@/components/projects/ProjectDetails";
import ProjectDetailsStats from "@/components/projects/ProjectDetailsStats";
import { cn, formatAmount } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

type ProjectDetailsLayoutProps = {
	children: React.ReactNode;
};

const ProjectDetailsLayout = ({ children }: ProjectDetailsLayoutProps) => {
	const [showChangeStatusModal, setShowChangeStatusModal] = useState(false);
	const [showCreateRequestModal, setShowCreateRequestModal] = useState(false);

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
		{
			name: "Warehouse Supply Requests",
			path: `/projects/${params.id}/warehouse-supply-requests`,
			isWider: true,
		},
		{
			name: "Transactions",
			path: `/projects/${params.id}/transactions`,
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
			project: "",
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
									name='project'
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
						<Button
							onClick={() => setShowCreateRequestModal(true)}
							className='w-1/2 lg:w-[200px] max-lg:h-9 max-lg:!px-0'>
							<div className='flex items-center space-x-3'>
								<Icons.PlusIcon className='fill-white' />
								<div>Create Request</div>
							</div>
						</Button>
						<Button
							onClick={() => setShowChangeStatusModal(true)}
							theme='outline'
							className='w-1/2 lg:w-[200px] max-lg:h-9 max-lg:!px-0'>
							Change Status
						</Button>
					</div>
				</div>
				<div className='lg:hidden flex items-center space-x-4 mt-4'>
					<button className='lg:hidden'>
						<Icons.ProjectEmailIcon />
					</button>
					<button className='lg:hidden'>
						<Icons.ProjectPrinterIcon />
					</button>
					<button className='lg:hidden'>
						<Icons.ProjectDocumentIcon />
					</button>
				</div>
			</div>
			<div className='mt-6'>
				<ProjectDetailsStats data={projectDetailsStatsData} />
			</div>
			<div className='mt-6 pb-5'>
				<ProjectDetails />
			</div>
			<Tab
				routes={routes}
				initialRoute={{
					name: pathname?.split("/")[3]?.replace("-", " "),
					value: `/projects/${params.id}/${pathname?.split("/")[3]}`,
				}}
			/>
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
			<ChangeStatusModal
				showModal={showChangeStatusModal}
				setShowModal={setShowChangeStatusModal}
			/>
			<CreateRequestModal
				showModal={showCreateRequestModal}
				setShowModal={setShowCreateRequestModal}
			/>
		</div>
	);
};

export default ProjectDetailsLayout;
