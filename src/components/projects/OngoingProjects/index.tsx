"use client";

import Table from "@/components/global/Table";
import Icons from "@/components/icons";
import { cn, formatAmount } from "@/lib/utils";
import { useRouter } from "next/navigation";

const OngoingProjects = () => {
	const router = useRouter();

	const data = [
		{
			code: "CPD1",
			initiationDate: "04 Feb 2023",
			proposedCompletionDate: "04 Feb 2023",
			budget: 3000000,
			invoiceValue: 50000,
			accountBalance: 500000,
			totalExpenses: 2500000,
		},
		{
			code: "CPD1",
			initiationDate: "04 Feb 2023",
			proposedCompletionDate: "04 Feb 2023",
			budget: 3000000,
			invoiceValue: 50000,
			accountBalance: 500000,
			totalExpenses: 2500000,
		},
		{
			code: "CPD1",
			initiationDate: "04 Feb 2023",
			proposedCompletionDate: "04 Feb 2023",
			budget: 3000000,
			invoiceValue: 50000,
			accountBalance: 500000,
			totalExpenses: 2500000,
		},
		{
			code: "CPD1",
			initiationDate: "04 Feb 2023",
			proposedCompletionDate: "04 Feb 2023",
			budget: 3000000,
			invoiceValue: 50000,
			accountBalance: 500000,
			totalExpenses: 2500000,
		},
		{
			code: "CPD1",
			initiationDate: "04 Feb 2023",
			proposedCompletionDate: "04 Feb 2023",
			budget: 3000000,
			invoiceValue: 50000,
			accountBalance: 500000,
			totalExpenses: 2500000,
		},
		{
			code: "CPD1",
			initiationDate: "04 Feb 2023",
			proposedCompletionDate: "04 Feb 2023",
			budget: 3000000,
			invoiceValue: 50000,
			accountBalance: 500000,
			totalExpenses: 2500000,
		},
		{
			code: "CPD1",
			initiationDate: "04 Feb 2023",
			proposedCompletionDate: "04 Feb 2023",
			budget: 3000000,
			invoiceValue: 50000,
			accountBalance: 500000,
			totalExpenses: 2500000,
		},
		{
			code: "CPD1",
			initiationDate: "04 Feb 2023",
			proposedCompletionDate: "04 Feb 2023",
			budget: 3000000,
			invoiceValue: 50000,
			accountBalance: 500000,
			totalExpenses: 2500000,
		},
		{
			code: "CPD1",
			initiationDate: "04 Feb 2023",
			proposedCompletionDate: "04 Feb 2023",
			budget: 3000000,
			invoiceValue: 50000,
			accountBalance: 500000,
			totalExpenses: 2500000,
		},
		{
			code: "CPD1",
			initiationDate: "04 Feb 2023",
			proposedCompletionDate: "04 Feb 2023",
			budget: 3000000,
			invoiceValue: 50000,
			accountBalance: 500000,
			totalExpenses: 2500000,
		},
	];

	const tableHeadData = [
		{
			title: "Project Code",
			key: "code",
		},
		{
			title: "Initiation Date",
			key: "initiationDate",
		},
		{
			title: "Proposed Completion Date",
			key: "proposedCompletionDate",
		},
		{
			title: "Budget",
			key: "budget",
		},
		{
			title: "Invoice Value",
			key: "invoiceValue",
		},
		{
			title: "Account Balance",
			key: "accountBalance",
		},
		{
			title: "Total Expenses",
			key: "totalExpenses",
		},
		{
			title: "Actions",
			key: "actions",
		},
	];

	return (
		<section>
			<Table
				data={data!}
				loaderLength={10}
				tableHeadData={tableHeadData}
				rowComponent={(transaction, index, length) => {
					const {
						code,
						initiationDate,
						proposedCompletionDate,
						budget,
						invoiceValue,
						accountBalance,
						totalExpenses,
					} = transaction;
					return (
						<tr
							onClick={() => {
								router.push("/projects/" + code + "/inventory");
							}}
							className={cn("text-sm cursor-pointer border-[#5A5A5A99]", {
								"border-b": index !== length - 1,
							})}>
							<td className='p-4 text-black-500 whitespace-nowrap'>{code}</td>
							<td className='p-4 text-black-500 whitespace-nowrap'>
								{initiationDate}
							</td>
							<td className='py-[18px] w-[100px] px-4 text-black-500 whitespace-nowrap'>
								{proposedCompletionDate}
							</td>
							<td className='p-4 text-black-500 whitespace-nowrap'>
								{formatAmount(+budget, "NGN")}
							</td>
							<td className='p-4 text-black-500 whitespace-nowrap'>
								{formatAmount(+invoiceValue, "NGN")}
							</td>
							<td className='p-4 text-black-500 whitespace-nowrap'>
								{formatAmount(+accountBalance, "NGN")}
							</td>
							<td className='p-4 text-black-500 whitespace-nowrap'>
								{formatAmount(+totalExpenses, "NGN")}
							</td>
							<td className='p-4'>
								<button>
									<Icons.MoreIcon />
								</button>
							</td>
						</tr>
					);
				}}
			/>
		</section>
	);
};

export default OngoingProjects;
