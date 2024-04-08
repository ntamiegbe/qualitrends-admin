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
		<div className='grid grid-cols-4 gap-8'>
			{stats.map((stat, index) => (
				<div
					key={index}
					className='bg-white px-5 py-6 drop-shadow-md rounded-lg'>
					{stat.icon}
					<p className='text-xl font-bold mt-3'>{stat.value}</p>
					<p className='text-lg mt-2'>{stat.title}</p>
				</div>
			))}
		</div>
	);
};

export default DashboardStats;
