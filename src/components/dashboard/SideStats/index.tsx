import { formatAmount } from "@/lib/utils";

const SideStats = () => {
	return (
		<div className='px-2.5 py-3 lg:py-6 bg-white drop-shadow-md rounded-lg h-full'>
			<div className='space-x-8 px-4'>
				<span className='lg:text-xl font-bold'>{formatAmount(0, "NGN")}</span>
				<span className='max-lg:text-sm'>Pending Expenses</span>
			</div>
			<hr className='border border-b border-[#CBCFD3] my-3' />
			<div className='space-x-8 px-4'>
				<span className='lg:text-xl font-bold'>{formatAmount(0, "NGN")}</span>
				<span className='max-lg:text-sm'>Pending Expenses</span>
			</div>
		</div>
	);
};

export default SideStats;
