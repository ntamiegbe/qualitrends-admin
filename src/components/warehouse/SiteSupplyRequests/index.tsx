"use client";

import Status, { StatusType } from "@/components/global/Status";
import Table from "@/components/global/Table";
import { cn, formatAmount } from "@/lib/utils";
import { useForm } from "react-hook-form";

const SiteSupplyRequests = () => {
    const methods = useForm();
    const data = [
        {
            id: "SS_001",
            projectCode: "Wuse_1936",
            requester: "John Doe",
            materialRequested: "Cement",
            quantityRequested: 40,
            pickUpDate: "1 Jul 2023",
            deliveryDate: "12 Jul 2023",
            status: "delivered",
        },
        {
            id: "SS_001",
            projectCode: "Wuse_1936",
            requester: "John Doe",
            materialRequested: "Cement",
            quantityRequested: 40,
            pickUpDate: "1 Jul 2023",
            deliveryDate: "12 Jul 2023",
            status: "in_transit",
        },
        {
            id: "SS_001",
            projectCode: "Wuse_1936",
            requester: "John Doe",
            materialRequested: "Cement",
            quantityRequested: 40,
            pickUpDate: "1 Jul 2023",
            deliveryDate: "12 Jul 2023",
            status: "picked_up",
        },
        {
            id: "SS_001",
            projectCode: "Wuse_1936",
            requester: "John Doe",
            materialRequested: "Cement",
            quantityRequested: 40,
            pickUpDate: "1 Jul 2023",
            deliveryDate: "12 Jul 2023",
            status: "delivered",
        },
        {
            id: "SS_001",
            projectCode: "Wuse_1936",
            requester: "John Doe",
            materialRequested: "Cement",
            quantityRequested: 40,
            pickUpDate: "1 Jul 2023",
            deliveryDate: "12 Jul 2023",
            status: "delivered",
        },
        {
            id: "SS_001",
            projectCode: "Wuse_1936",
            requester: "John Doe",
            materialRequested: "Cement",
            quantityRequested: 40,
            pickUpDate: "1 Jul 2023",
            deliveryDate: "12 Jul 2023",
            status: "delivered",
        },
        {
            id: "SS_001",
            projectCode: "Wuse_1936",
            requester: "John Doe",
            materialRequested: "Cement",
            quantityRequested: 40,
            pickUpDate: "1 Jul 2023",
            deliveryDate: "12 Jul 2023",
            status: "delivered",
        },
        
    ];

    const tableHeadData = [
        {
            title: "ID",
            key: "id"
        },
        {
            title: "Project Code",
            key: "projectCode",
        },
        {
            title: "Requester",
            key: "requester",
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
            title: "Pick-Up Date",
            key: "pickUpDate",
        },
        {
            title: "Delivery Date",
            key: "deliveryDate",
        },
        {
            title: "Status",
            key: "status",
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
                        projectCode,
                        requester,
                        materialRequested,
                        quantityRequested,
                        pickUpDate,
                        deliveryDate,
                        status,
                    } = transaction;
                    return (
                        <tr
                            onClick={() => { }}
                            className={cn("text-sm border-[#5A5A5A99]", {
                                "border-b": index !== length - 1,
                            })}>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {id}
                            </td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {projectCode}
                            </td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {requester}
                            </td>
                            <td className='py-[18px] w-[100px] px-4 text-black-500 whitespace-nowrap'>
                                {materialRequested}
                            </td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {quantityRequested}
                            </td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {pickUpDate}
                            </td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {deliveryDate}
                            </td>
                            <td className='p-4'>
                                <Status status={status as StatusType} />
                            </td>
                        </tr>
                    );
                }}
            />
        </section>
    );
};

export default SiteSupplyRequests;
