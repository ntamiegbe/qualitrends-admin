"use client";

import DashboardStats from "../DashboardStats";
import IncomeAndExpensesChart from "../IncomeAndExpensesChart";
import Projects from "../Projects";
import SideStats from "../SideStats";

const Dashboard = () => {
	return (
		<section className='grid grid-cols-3 gap-8'>
			<div className='col-span-2 space-y-6'>
				<DashboardStats />
			</div>
			<div className='col-span-1 space-y-6'>
				<SideStats />
			</div>
			<div className='col-span-2 space-y-6'>
				<IncomeAndExpensesChart />
			</div>
			<div className='col-span-1 space-y-6'>
				<Projects />
			</div>
		</section>
	);
};

export default Dashboard;
