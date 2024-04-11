"use client";

import Button from "@/components/global/Button";
import SelectInput from "@/components/global/SelectInput";
import Icons from "@/components/icons";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import SideStats from "@/components/global/SideStats";
import { formatAmount, numberWithCommas } from "@/lib/utils";
import Stats from "@/components/global/Stats";
import IncomeAndExpensesChart from "@/components/dashboard/IncomeAndExpensesChart";
import ProjectsTable from "../ProjectsTable";

const Projects = () => {
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

	const stats = [
		{
			title: "Total Income",
			value: formatAmount(0, "NGN"),
			icon: <Icons.IncomeIcon />,
		},
		{
			title: "Total Expenses",
			value: formatAmount(0, "NGN"),
			icon: <Icons.ExpensesIcon />,
		},
		{
			title: "Total Budget",
			value: 0,
			icon: <Icons.ProjectStatsIcon />,
		},
		{
			title: "Projects",
			value: 0,
			icon: <Icons.ProjectStatsIcon />,
		},
	];

	const sideStats = [
		{
			title: "Total Ongoing Projects",
			value: numberWithCommas(0),
		},
		{
			title: "Total Completed Projects",
			value: numberWithCommas(0),
		},
	];

	return (
		<div>
			<div className='lg:flex lg:space-x-5 lg:items-center justify-between'>
				<div>
					<h1 className='lg:text-2xl font-semibold'>Projects</h1>
					<div className='text-sm lg:text-sm text-black-500 font-Roboto flex items-center space-x-3 mt-1'>
						<Link href='/dashboard'>
							<span className='hidden lg:block'>Dashboard</span>
							<Icons.DashboardIcon className='fill-black-500 lg:hidden' />
						</Link>
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
			<div className='flex items-center space-x-2 mt-2 max-lg:mt-4'>
				<div className='text-xs'>Showing data for:</div>
				<div className='w-[200px]'>
					<FormProvider {...methods}>
						<SelectInput
							name='route'
							options={[
								{
									name: "Projects",
									value: "/projects",
								},
								{
									name: "Ongoing Projects",
									value: "/projects/ongoing-projects",
								},
								{
									name: "Completed Projects",
									value: "/projects/completed-projects",
								},
							]}
							optionComponent={(option, selectedOption) => {
								return (
									<div
										className={`py-2 w-full px-4 flex items-center space-x-5 text-tc-main hover:bg-[#FF69001A] ${
											option?.value === selectedOption?.value
												? "bg-[#FF69001A]"
												: ""
										}`}>
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
												Select Route
											</div>
										)}
									</div>
								);
							}}
						/>
					</FormProvider>
				</div>
			</div>
			<div className='mt-6'>
				<section className='lg:grid lg:grid-cols-3 lg:gap-8 max-lg:space-y-4'>
					<div className='col-span-2 space-y-6'>
						<Stats stats={stats} showMobileTitle={false} />
					</div>
					<div className='col-span-1 space-y-6'>
						<SideStats stats={sideStats} />
					</div>
				</section>
			</div>
			<div className='mt-6'>
				<section className='lg:grid lg:grid-cols-2 lg:gap-8 max-lg:space-y-4'>
					<div className='col-span-1 space-y-6'>
						<IncomeAndExpensesChart />
					</div>
					<div className='col-span-1 space-y-6'></div>
				</section>
			</div>
			<div className='mt-6'>
				<ProjectsTable />
			</div>
		</div>
	);
};

export default Projects;
