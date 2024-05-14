"use client";

import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import Icons from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import Dropdown from "@/components/global/Dropdown";
import IncomingPaymentModal from "@/components/Finances/IncomingPaymentModal";
import MakePaymentModal from "@/components/Finances/MakePaymentModal";
import { useState } from "react";

type FinancesLayoutProps = {
	children: React.ReactNode;
};

const FinancesLayout = ({ children }: FinancesLayoutProps) => {
	const [ShowIncomingPaymentModal, setShowIncomingPaymentModal] = useState(false);
	const [ShowMakePaymentModal, setShowMakePaymentModal] = useState(false);
	const pathname = usePathname();

	const routes = [
		{
			name: "income",
			path: "/finances/income",
		},
		{
			name: "expenses",
			path: "/finances/expenses",
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

	const dropdownButtons = [
		{
			label: "Incoming Payment",
			onClick: () => setShowIncomingPaymentModal(true),
		},
		{
			label: "Make Payment",
			onClick: () => setShowMakePaymentModal(true),
		},
	];

	return (
		<div>
			<div className='lg:flex lg:space-x-5 justify-between'>
				<div>
					<h1 className='lg:text-2xl font-semibold'>Account & Finance</h1>
					<div className='text-sm lg:text-sm text-black-500 font-Roboto flex items-center space-x-3 mt-1'>
						<Link href='/dashboard'>Dashboard</Link>
						<span>
							<Icons.CaretIcon className='fill-black-900 transform -rotate-90' />
						</span>
						<Link href='/finances/income' className="text-primary">Account & Finance</Link>
						{/* <span>
							<Icons.CaretIcon className='fill-black-900 transform -rotate-90' />
						</span> */}
						<span className='capitalize text-primary'>
							{pathname?.split("/")[3]?.replace("-", " ")}
						</span>
					</div>
					<div className='max-lg:hidden mt-6 font-semibold flex justify-between items-center'>
						<div className="text-[16px] mr-[73px]">Total Income: <span className="text-[20px] text-primary">₦ 0.00</span></div>
						<div className="text-[16px]">Total Expenses: <span className="text-[20px] text-primary">₦ 0.00</span></div>
					</div>
				</div>
				<div className='space-y-4 lg:space-y-6 max-lg:mt-4'>
					<div className='flex items-center space-x-5 lg:space-x-6'>
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
						<Button
							theme='plain'
							className='border text-black-500 max-lg:px-2.5 h-[42px] border-[#5A5A5A33] rounded'>
							<div className='flex items-center lg:space-x-2.5'>
								<Icons.FilterIcon />
								<div className='max-lg:hidden'>Filter</div>
								<Icons.CaretIcon className='fill-black-500 max-lg:hidden' />
							</div>
						</Button>
					</div>

					<div className='flex items-center float-right '>
						<div className="">
								<Dropdown
								trigger={() => (
									<Button className='w-[200px] max-lg:h-9 hover:bg-white hover:text-primary'>
										<div className='flex items-center space-x-3'>
											<Icons.PlusIcon className='fill-white hover:fill-primary' />
											<div>Create</div>
										</div>
									</Button>
								)}
								className='top-14'>
								<div className='w-[200px] bg-white rounded-md'>
									{dropdownButtons.map((button, index) => (
										<button
											key={index}
											onClick={button.onClick}
											className='flex w-full dropdown-item hover:bg-[#FFE2D2] transition-all text-sm items-center justify-between p-3 border-b last:border-b-0 border-[#CBCFD3]'>
											{button.label}
										</button>
									))}
								</div>
							</Dropdown>
							{/* <button className='lg:hidden'>
								<Icons.ProjectEmailIcon />
							</button>
							<button className='lg:hidden'>
								<Icons.ProjectPrinterIcon />
							</button>
							<button className='lg:hidden'>
								<Icons.ProjectDocumentIcon />
							</button> */}
						</div>

						<div className="flex justify-between items-center lg:ml-[28px]">
							<div className=" ">
								<Button
									theme='plain'
									className='border text-black-500 max-lg:px-2.5 w-[56px] h-[42px] border-[#5A5A5A33] rounded'>
									<div className='flex items-center lg:space-x-2.5'>
										<Icons.FileX />
									</div>
								</Button>
							</div>
							<div className="lg:ml-[40px]">
								<Button
									theme='plain'
									className='border text-black-500 max-lg:px-2.5 w-[56px] h-[42px] border-[#5A5A5A33] rounded'>
									<div className='flex items-center lg:space-x-2.5'>
										<Icons.PdfFile />
									</div>
								</Button>
							</div>
						</div>
					</div>
				</div>
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
			<div>{children}</div>

			<IncomingPaymentModal
				showModal={ShowIncomingPaymentModal}
				setShowModal={setShowIncomingPaymentModal}
			/>
			<MakePaymentModal
			showModal={ShowMakePaymentModal }
			setShowModal={ setShowMakePaymentModal}
		/>
		</div>
	);
};

export default FinancesLayout;
