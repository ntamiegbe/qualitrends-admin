"use client";

import CreateCard from "../CreateCard";
import DashboardStats from "../DashboardStats";
import IncomeAndExpensesChart from "../IncomeAndExpensesChart";
import Projects from "../Projects";
import RecentTransactions from "../RecentTransactions";
import SideStats from "../SideStats";

const Dashboard = () => {
	return (
		<section className='lg:grid lg:grid-cols-3 lg:gap-8 max-lg:space-y-4'>
			<div className='col-span-2 space-y-6'>
				<DashboardStats />
			</div>
			<div className='col-span-1 space-y-6'>
				<SideStats />
			</div>
			<div className='col-span-2 space-y-6'>
				<IncomeAndExpensesChart />
				<RecentTransactions />
			</div>
			<div className='col-span-1 space-y-6'>
				<Projects />
				<CreateCard />
			</div>
		</section>
	);
};

export default Dashboard;
