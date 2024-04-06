"use client";

import Icons from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import NavigationLink from "../NavigationLink";

const Navigation = () => {
	const pathname = usePathname();

	const router = useRouter();

	const links = [
		{
			name: "Dashboard",
			to: "/dashboard",
			icon: <Icons.DashboardIcon className='fill-inherit' />,
		},
		{
			name: "Projects",
			to: "/projects",
			icon: <Icons.ProjectsIcon className='fill-inherit' />,
			children: [
				{
					name: "All Projects",
					to: "/projects/all-projects",
				},
				{
					name: "Ongoing Projects",
					to: "/projects/ongoing-projects",
				},
				{
					name: "Completed Project",
					to: "/projects/completed-projects",
				},
			],
		},
		{
			name: "Warehouse",
			to: "/warehouse",
			icon: <Icons.WarehouseIcon className='fill-inherit' />,
			children: [
				{
					name: "Product List",
					to: "/warehouse/product-list",
				},
				{
					name: "Warehouse Activities",
					to: "/warehouse/warehouse-activities",
				},
			],
		},
		{
			name: "Requests",
			to: "/requests",
			icon: <Icons.RequestsIcon className='fill-inherit' />,
		},
		{
			name: "People",
			to: "/people",
			icon: <Icons.PeopleIcon className='fill-inherit' />,
			children: [
				{
					name: "Customers",
					to: "/people/customers",
				},
				{
					name: "Suppliers",
					to: "/people/suppliers",
				},
				{
					name: "Staff",
					to: "/people/staff",
				},
			],
		},
		{
			name: "Finances",
			to: "/finances",
			icon: <Icons.FinancesIcon className='fill-inherit' />,
		},
		{
			name: "Lease & Sales",
			to: "/lease-and-sales",
			icon: <Icons.LeaseIcon className='fill-inherit' />,
		},
		{
			name: "Reports",
			to: "/reports",
			icon: <Icons.ReportsIcon className='fill-inherit' />,
		},
		{
			name: "Settings",
			to: "/settings",
			icon: <Icons.SettingsIcon className='fill-inherit' />,
		},
	];

	return (
		<nav className='w-[278px] h-screen fixed bg-[#173E62] pt-5'>
			<Link href='/dashboard' className='flex justify-center items-center pb-6'>
				<Icons.Logo className='w-[99px] h-[74px]' />
			</Link>
			<div className='flex flex-col h-[calc(100%-198px)] justify-between'>
				<ul className='px-2.5 space-y-2 mt-8'>
					{links.map((link) => {
						return <NavigationLink key={link.name} link={link} />;
					})}
				</ul>
			</div>

			<div className='px-2.5'>
				<button
					onClick={() => {
						router.push("/auth/login");
					}}
					className={cn(
						"block transition-all rounded-lg w-full text-white px-4 py-3"
					)}>
					<div className='flex items-center space-x-6'>
						<div className={cn("fill-white transition-all", {})}>
							<Icons.LogoutIcon className='fill-inherit' />
						</div>
						<div className=''>Logout</div>
					</div>
					<div></div>
				</button>
			</div>
		</nav>
	);
};

export default Navigation;
