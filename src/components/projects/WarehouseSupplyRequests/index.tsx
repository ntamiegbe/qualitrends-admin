"use client";

import Table from "@/components/global/Table";
import { cn, formatAmount, numberWithCommas } from "@/lib/utils";

const WarehouseSupplyRequests = () => {
	const data = [
		{
			id: "RSQ_2023_01",
			materialRequested: "Wood",
			quantityRequested: numberWithCommas(25),
			quantityReceived: numberWithCommas(20),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
			dateReceived: "23 Mar 2023",
			totalValue: formatAmount(300000000, "NGN"),
		},
		{
			id: "RSQ_2023_01",
			materialRequested: "Wood",
			quantityRequested: numberWithCommas(25),
			quantityReceived: numberWithCommas(20),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
			dateReceived: "23 Mar 2023",
			totalValue: formatAmount(300000000, "NGN"),
		},
		{
			id: "RSQ_2023_01",
			materialRequested: "Wood",
			quantityRequested: numberWithCommas(25),
			quantityReceived: numberWithCommas(20),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
			dateReceived: "23 Mar 2023",
			totalValue: formatAmount(300000000, "NGN"),
		},
		{
			id: "RSQ_2023_01",
			materialRequested: "Wood",
			quantityRequested: numberWithCommas(25),
			quantityReceived: numberWithCommas(20),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
			dateReceived: "23 Mar 2023",
			totalValue: formatAmount(300000000, "NGN"),
		},
		{
			id: "RSQ_2023_01",
			materialRequested: "Wood",
			quantityRequested: numberWithCommas(25),
			quantityReceived: numberWithCommas(20),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
			dateReceived: "23 Mar 2023",
			totalValue: formatAmount(300000000, "NGN"),
		},
		{
			id: "RSQ_2023_01",
			materialRequested: "Wood",
			quantityRequested: numberWithCommas(25),
			quantityReceived: numberWithCommas(20),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
			dateReceived: "23 Mar 2023",
			totalValue: formatAmount(300000000, "NGN"),
		},
		{
			id: "RSQ_2023_01",
			materialRequested: "Wood",
			quantityRequested: numberWithCommas(25),
			quantityReceived: numberWithCommas(20),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
			dateReceived: "23 Mar 2023",
			totalValue: formatAmount(300000000, "NGN"),
		},
		{
			id: "RSQ_2023_01",
			materialRequested: "Wood",
			quantityRequested: numberWithCommas(25),
			quantityReceived: numberWithCommas(20),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
			dateReceived: "23 Mar 2023",
			totalValue: formatAmount(300000000, "NGN"),
		},
		{
			id: "RSQ_2023_01",
			materialRequested: "Wood",
			quantityRequested: numberWithCommas(25),
			quantityReceived: numberWithCommas(20),
			dateRequested: "04 Feb 2023",
			dateApproved: "17 Mar 2023",
			dateReceived: "23 Mar 2023",
			totalValue: formatAmount(300000000, "NGN"),
		},
	];

	const tableHeadData = [
		{
			title: "Requests ID",
			key: "requestsID",
		},
		{
			title: "Material Requested",
			key: "materialRequested",
		},
		{
			title: "Quantity Requested",
			key: "quantityRequested",
		},
		{
			title: "Quantity Received",
			key: "quantityReceived",
		},
		{
			title: "Date Requested",
			key: "dateRequested",
		},
		{
			title: "Date Approved",
			key: "dateApproved",
		},
		{
			title: "Date Received",
			key: "dateReceived",
		},
		{
			title: "Total Value",
			key: "totalValue",
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
						materialRequested,
						quantityRequested,
						quantityReceived,
						dateRequested,
						dateApproved,
						dateReceived,
						totalValue,
					} = data;
					return (
						<tr
							className={cn("text-sm  border-[#5A5A5A99]", {
								"border-b": index !== length - 1,
							})}>
							<td className='p-4 text-black-500 whitespace-nowrap'>{id}</td>
							<td className='p-4 text-black-500 whitespace-nowrap'>
								{materialRequested}
							</td>
							<td className='p-4 text-black-500 whitespace-nowrap'>
								{quantityRequested}
							</td>
							<td className='p-4 text-black-500 whitespace-nowrap'>
								{quantityReceived}
							</td>
							<td className='p-4 text-black-500 whitespace-nowrap'>
								{dateRequested}
							</td>
							<td className='p-4 text-black-500 whitespace-nowrap'>
								{dateApproved}
							</td>
							<td className='p-4 text-black-500 whitespace-nowrap'>
								{dateReceived}
							</td>
							<td className='p-4 text-black-500 whitespace-nowrap'>
								{totalValue}
							</td>
						</tr>
					);
				}}
			/>
		</section>
	);
};

export default WarehouseSupplyRequests;
