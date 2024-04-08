import Icons from "@/components/icons";
import { formatAmount } from "@/lib/utils";

const DashboardStats = () => {
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
			title: "Projects",
			value: 0,
			icon: <Icons.ProjectStatsIcon />,
		},
		{
			title: "Customers",
			value: 0,
			icon: <Icons.CustomersIcon />,
		},
	];
	return (
		<div>
			<h1 className='mb-4 font-semibold lg:hidden'>Dashboard</h1>
			<div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
				{stats.map((stat, index) => (
					<div
						key={index}
						className='bg-white px-4 lg:px-5 py-3 lg:py-6 drop-shadow-md rounded-lg'>
						{stat.icon}
						<p className='lg:text-xl font-bold mt-1.5 lg:mt-3'>{stat.value}</p>
						<p className='text-sm lg:text-lg mt-1 lg:mt-2'>{stat.title}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default DashboardStats;
