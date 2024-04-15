
"use client";

import Table from "@/components/global/Table";
import Icons from "@/components/icons";
import { cn, formatAmount } from "@/lib/utils";
import TotalOutstanding from "./component/totaloutstanding"; 


const expenses = () => {
    const data = [
		{
			id: "INC_001",
			expensename: "Rent",
			expensetype: "Expenses Request",
			totalpaid: 5000000,
			totaloutstanding: " ₦ 0.00",
			sourceaccount: "Gen Acct",
			receiver: "Project Manager",
		},
        {
          id: "INC_001",
          expensename: "Mortgage",
          expensetype: "Purchase Order",
          totalpaid: 50000,
          totaloutstanding: -50000,
          sourceaccount: "Project Code",
          receiver: "Project Manager",
		},
		{
			id: "INC_001",
          expensename: "Material Purchase",
          expensetype: "Expenses Request",
          totalpaid: 500000,
          totaloutstanding: -50000,
          sourceaccount: "Project Code",
          receiver: "Supplier ID",
		},
		{
			id: "INC_001",
          expensename: "Material Purchase",
          expensetype: "Purchase Order",
          totalpaid: 500000,
          totaloutstanding: -50000,
          sourceaccount: "Gen Acct",
          receiver: "Project Manager",
		},
		{
			id: "INC_001",
          expensename: "Rent",
          expensetype: "Expenses Request",
          totalpaid: 500000,
          totaloutstanding: -50000,
          sourceaccount: "Project Code",
          receiver: "Project Manager",
		},
		{
			id: "INC_001",
          expensename: "Mortgage",
          expensetype: "Purchase Order",
          totalpaid: 50000,
          totaloutstanding: -50000,
          sourceaccount: "Gen Acct",
          receiver: "Supplier ID",
		},
		{
			id: "INC_001",
          expensename: "Mortgage",
          expensetype: "Purchase Order",
          totalpaid: 500000,
          totaloutstanding: -50000,
          sourceaccount: "Gen Acct",
          receiver: "Project Manager",
		},
		{
			id: "INC_001",
          expensename: "Rent",
          expensetype: "Expenses Request",
          totalpaid: 500000,
          totaloutstanding: -50000,
          sourceaccount: "Project Code",
          receiver: "Supplier ID",
		},
		{
			id: "INC_001",
          expensename: "Material Purchase",
          expensetype: "Expenses Request",
          totalpaid: 500000,
          totaloutstanding: -50000,
          sourceaccount: "Gen Acct",
          receiver: "Project Manager",
		},
		{
			id: "INC_001",
          expensename: "Rent",
          expensetype: "Purchase Order",
          totalpaid: 50000,
          totaloutstanding: -50000,
          sourceaccount: "Project Code",
          receiver: "Supplier ID",
		},
    ];

    const tableHeadData = [
        {
			title: "ID",
			key: "id",
		},
		{
			title: "Expense Name",
			key: "expensename",
		},
		{
			title: "Expense Type",
			key: "expensetype",
		},
		{
			title: "Total Paid",
			key: "totalpaid",
		},
		{
			title: "Total Outstanding",
			key: "totaloutstanding",
		},
		{
			title: "Source Account",
			key: "sourceaccount",
		},
		{
			title: "Receiver",
			key: "receiver",
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
                        id,
                        expensename,
                        expensetype,
                        totaloutstanding,
                        totalpaid,
                        sourceaccount,
                        receiver,
                    } = transaction;
                    return (
                        <tr
                            onClick={() => {}}
                            className={cn("text-sm border-[#5A5A5A99]", {
                                "border-b": index !== length - 1,
                            })}
                        >
                            <td className="p-4 text-black-500 whitespace-nowrap">{id}</td>
                            <td className="p-4 text-black-500 whitespace-nowrap">{expensename}</td>
                            <td className="py-[18px] w-[100px] px-4 text-black-500 whitespace-nowrap">{expensetype}</td>
                            <td className="p-4 whitespace-nowrap">{formatAmount(+totalpaid, "NGN")}</td>
                            <td className="p-4 text-black-500 whitespace-nowrap">
                                <TotalOutstanding value={totaloutstanding} />
                            </td>
                            <td className="p-4 text-black-500 whitespace-nowrap capitalise">{sourceaccount}</td>
                            <td className="p-4 text-black-500 whitespace-nowrap">{receiver}</td>
                            <td className="p-4">
                                <button>
                                    <Icons.MoreIcon />
                                </button>
                            </td>
                        </tr>
                    );
                }}
            />

            <div className="flex justify-between items-center mt-8">
                <div className="text-black-500 font-semibold pt-2">Showing 1 - 9 from 100</div>
                <div className="">pagination</div>
            </div>
        </section>
    );
};

export default expenses;
