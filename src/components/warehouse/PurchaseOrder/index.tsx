"use client";

import Button from "@/components/global/Button";
import Status, { StatusType } from "@/components/global/Status";
import Table from "@/components/global/Table";
import { cn, formatAmount } from "@/lib/utils";
import { useForm } from "react-hook-form";

const PurchaseOrder = () => {
    const methods = useForm();
    const data = [
        {
            id: "PO_23_1",
            supplierName: "Jamima Smith",
            totalValue: 100000000,
            totalPaid: 100000,
            dateRequested: "01 Jun 2023",
            status: "pending",
            dateDelivered: "12 Jul 2023",
            confirm: "Confirm"
        },
        {
            id: "PO_23_1",
            supplierName: "Jamima Smith",
            totalValue: 100000000,
            totalPaid: 100000,
            dateRequested: "01 Jun 2023",
            status: "approved",
            dateDelivered: "12 Jul 2023",
            confirm: "Confirmed"
        },
        {
            id: "PO_23_1",
            supplierName: "Jamima Smith",
            totalValue: 100000000,
            totalPaid: 100000,
            dateRequested: "01 Jun 2023",
            status: "declined",
            dateDelivered: "12 Jul 2023",
            confirm: "Confirm"
        },
        {
            id: "PO_23_1",
            supplierName: "Jamima Smith",
            totalValue: 100000000,
            totalPaid: 100000,
            dateRequested: "01 Jun 2023",
            status: "approved",
            dateDelivered: "12 Jul 2023",
            confirm: "Confirmed"
        },
        {
            id: "PO_23_1",
            supplierName: "Jamima Smith",
            totalValue: 100000000,
            totalPaid: 100000,
            dateRequested: "01 Jun 2023",
            status: "approved",
            dateDelivered: "12 Jul 2023",
            confirm: "Confirmed"
        },
        {
            id: "PO_23_1",
            supplierName: "Jamima Smith",
            totalValue: 100000000,
            totalPaid: 100000,
            dateRequested: "01 Jun 2023",
            status: "approved",
            dateDelivered: "12 Jul 2023",
            confirm: "Confirmed"
        },
        {
            id: "PO_23_1",
            supplierName: "Jamima Smith",
            totalValue: 100000000,
            totalPaid: 100000,
            dateRequested: "01 Jun 2023",
            status: "approved",
            dateDelivered: "12 Jul 2023",
            confirm: "Confirmed"
        },
        {
            id: "PO_23_1",
            supplierName: "Jamima Smith",
            totalValue: 100000000,
            totalPaid: 100000,
            dateRequested: "01 Jun 2023",
            status: "approved",
            dateDelivered: "12 Jul 2023",
            confirm: "Confirmed"
        },
        {
            id: "PO_23_1",
            supplierName: "Jamima Smith",
            totalValue: 100000000,
            totalPaid: 100000,
            dateRequested: "01 Jun 2023",
            status: "approved",
            dateDelivered: "12 Jul 2023",
            confirm: "Confirmed"
        },
    ];

    const tableHeadData = [
        {
            title: "ID",
            key: "id",
        },
        {
            title: "Supplier Name",
            key: "supplierName",
        },
        {
            title: "Total Value",
            key: "totalValue",
        },
        {
            title: "Total Paid",
            key: "totalPaid",
        },
        {
            title: "Date Requested",
            key: "dateRequested",
        },
        {
            title: "Status",
            key: "status",
        },
        {
            title: "Date Delivered",
            key: "dateDelivered",
        },
        {
            title: "",
            key: "confirm",
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
                        supplierName,
                        totalValue,
                        totalPaid,
                        dateRequested,
                        status,
                        dateDelivered,
                        confirm
                    } = transaction;
                    return (
                        <tr
                            onClick={() => { }}
                            className={cn("text-sm border-[#5A5A5A99]", {
                                "border-b": index !== length - 1,
                            })}>
                            <td className='p-4 text-black-500 whitespace-nowrap'>{id}</td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {supplierName}
                            </td>
                            <td className='py-[18px] w-[100px] px-4 text-black-500 whitespace-nowrap'>
                                {formatAmount(+totalValue, "NGN")}
                            </td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {formatAmount(+totalPaid, "NGN")}
                            </td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {dateRequested}
                            </td>
                            <td className='p-4'>
                                <Status status={status as StatusType} />
                            </td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {dateDelivered}
                            </td>
                            <td className='p-4'>
                                {confirm === "Confirm" ? (
                                    <Button className="bg-[#FFE2D2] text-primary border-none" size="sm">
                                        Confirm
                                    </Button>
                                ) : (
                                        <Button className="bg-[#008000] border-none" size="sm">
                                        Confirmed
                                    </Button>
                                )}
                            </td>
                        </tr>
                    );
                }}
            />
        </section>
    );
};

export default PurchaseOrder;
