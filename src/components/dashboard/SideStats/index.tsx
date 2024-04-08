import { formatAmount } from "@/lib/utils";

const SideStats = () => {
	return (
		<div className='px-2.5 py-6 bg-white drop-shadow-md rounded-lg h-full'>
			<div className='space-x-8 px-4'>
				<span className='text-xl font-bold'>{formatAmount(0, "NGN")}</span>
				<span>Pending Expenses</span>
			</div>
			<hr className='border border-b border-[#CBCFD3] my-3' />
			<div className='space-x-8 px-4'>
				<span className='text-xl font-bold'>{formatAmount(0, "NGN")}</span>
				<span>Pending Expenses</span>
			</div>
		</div>
	);
};

export default SideStats;
