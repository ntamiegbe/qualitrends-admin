"use client";

import Button from "@/components/global/Button";
import Status, { StatusType } from "@/components/global/Status";
import Table from "@/components/global/Table";
import { cn, formatAmount, numberWithCommas } from "@/lib/utils";

const ExpenseRequests = () => {
	const data = [
		{
			id: "RSQ_2023_01",
			expenseCategory: "Utilities",
			totalDisbursed: formatAmount(63505000, "NGN"),
			totalValue: formatAmount(300000000, "NGN"),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
		},
		{
			id: "RSQ_2023_01",
			expenseCategory: "Utilities",
			totalDisbursed: formatAmount(63505000, "NGN"),
			totalValue: formatAmount(300000000, "NGN"),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
		},
		{
			id: "RSQ_2023_01",
			expenseCategory: "Utilities",
			totalDisbursed: formatAmount(63505000, "NGN"),
			totalValue: formatAmount(300000000, "NGN"),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
		},
		{
			id: "RSQ_2023_01",
			expenseCategory: "Utilities",
			totalDisbursed: formatAmount(63505000, "NGN"),
			totalValue: formatAmount(300000000, "NGN"),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
		},
		{
			id: "RSQ_2023_01",
			expenseCategory: "Utilities",
			totalDisbursed: formatAmount(63505000, "NGN"),
			totalValue: formatAmount(300000000, "NGN"),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
		},
		{
			id: "RSQ_2023_01",
			expenseCategory: "Utilities",
			totalDisbursed: formatAmount(63505000, "NGN"),
			totalValue: formatAmount(300000000, "NGN"),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
		},
		{
			id: "RSQ_2023_01",
			expenseCategory: "Utilities",
			totalDisbursed: formatAmount(63505000, "NGN"),
			totalValue: formatAmount(300000000, "NGN"),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
		},
		{
			id: "RSQ_2023_01",
			expenseCategory: "Utilities",
			totalDisbursed: formatAmount(63505000, "NGN"),
			totalValue: formatAmount(300000000, "NGN"),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
		},
		{
			id: "RSQ_2023_01",
			expenseCategory: "Utilities",
			totalDisbursed: formatAmount(63505000, "NGN"),
			totalValue: formatAmount(300000000, "NGN"),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
		},
	];

	const tableHeadData = [
		{
			title: "Requests ID",
			key: "requestsID",
		},
		{
			title: "Expense Category",
			key: "expenseCategory",
		},
		{
			title: "Total Disbursed",
			key: "totalDisbursed",
		},
		{
			title: "Total Value",
			key: "totalValue",
		},
		{
			title: "Date Requested",
			key: "dateRequested",
		},
		{
			title: "Date Approved",
			key: "dateApproved",
		},
	];

	return (
		<section>
			<Table
				data={data!}
				loaderLength={10}
				tableHeadData={tableHeadData}
				rowComponent={(data, index, length) => {
					const {
						id,
						expenseCategory,
						totalDisbursed,
						totalValue,
						dateRequested,
						dateApproved,
					} = data;
					return (
						<tr
							className={cn("text-sm  border-[#5A5A5A99]", {
								"border-b": index !== length - 1,
							})}>
							<td className='p-4  text-black-500 whitespace-nowrap'>{id}</td>
							<td className='p-4 text-black-500 whitespace-nowrap'>
								{expenseCategory}
							</td>
							<td className='p-4 text-black-500 whitespace-nowrap'>
								{totalDisbursed}
							</td>
							<td className='p-4 text-black-500 whitespace-nowrap'>
								{totalValue}
							</td>
							<td className='p-4 text-black-500 whitespace-nowrap'>
								{dateRequested}
							</td>

							<td className='p-4  text-black-500 whitespace-nowrap'>
								{dateApproved}
							</td>
						</tr>
					);
				}}
			/>
		</section>
	);
};

export default ExpenseRequests;
