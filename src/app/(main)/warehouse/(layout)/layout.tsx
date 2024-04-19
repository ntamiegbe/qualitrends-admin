"use client";

import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import Tab from "@/components/global/Tab";
import Icons from "@/components/icons";
import CreateProjectModal from "@/components/projects/CreateProjectModal";
import ProjectFilterModal from "@/components/projects/ProjectFilterModal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

type WarehouseLayoutProps = {
	children: React.ReactNode;
};

const WarehouseLayout = ({ children }: WarehouseLayoutProps) => {
	const pathname = usePathname();
	const [showCreatePurchaseModal, setShowCreatePurchaseModal] = useState(false);
	const [showPurchaseFilterModal, setShowPurchaseFilterModal] = useState(false);

	const routes = [
		{
			name: "purchase order",
			path: "/warehouse/purchase-order",
			isWider: true
		},
		{
			name: "material transfer",
			path: "/warehouse/material-transfer",
		},
		{
			name: "site supply requests",
			path: "/warehouse/site-supply-requests",
			isWider: true
		},
		{
			name: "lease",
			path: "/warehouse/lease",
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
					<h1 className='lg:text-2xl font-semibold'>Warehouse</h1>
					<div className='text-sm lg:text-sm text-black-500 font-Roboto flex items-center space-x-3 mt-1'>
						<Link href='/dashboard'>
							<span className='hidden lg:block'>Dashboard</span>
							<Icons.DashboardIcon className='fill-black-500 lg:hidden' />
						</Link>
						<span>
							<Icons.CaretIcon className='fill-black-900 transform -rotate-90' />
						</span>
						<span className='text-primary'>Warehouse</span>
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
							onClick={() => setShowPurchaseFilterModal(true)}
							theme='plain'
							className='border text-black-500 max-lg:px-2.5 h-[42px] border-[#5A5A5A33] rounded'>
							<div className='flex items-center lg:space-x-2.5'>
								<Icons.FilterIcon />
								<div className='max-lg:hidden'>Filter</div>
								<Icons.CaretIcon className='fill-black-500 max-lg:hidden' />
							</div>
						</Button>
					</div>
					<div className='flex justify-between items-center lg:space-x-6 lg:justify-end'>
						<Button
							className='w-[200px] max-lg:h-9'
							onClick={() => setShowCreatePurchaseModal(true)}
						>
							<div className='flex items-center space-x-3'>
								<Icons.PlusIcon className='fill-white size-3.5' />
								<div>Create Purchase</div>
							</div>
						</Button>
						<button>
							<Icons.ProjectDocumentIcon />
						</button>
						<button>
							<Icons.ProjectDocumentIcon />
						</button>
					</div>
				</div>
			</div>
			<div className='my-10'>
				<Tab
					routes={routes}
					initialRoute={{
						name: pathname?.split("/")[2]?.replace("-", " "),
						value: `/warehouse/${pathname?.split("/")[2]}`,
					}}
				/>
			</div>
			<div>{children}</div>
			<CreateProjectModal
				showModal={showCreatePurchaseModal}
				setShowModal={setShowCreatePurchaseModal}
			/>
			<ProjectFilterModal
				showModal={showPurchaseFilterModal}
				setShowModal={setShowPurchaseFilterModal}
			/>
		</div>
	);
};

export default WarehouseLayout;
