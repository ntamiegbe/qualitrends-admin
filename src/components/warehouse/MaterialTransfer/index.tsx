"use client";

import Status, { StatusType } from "@/components/global/Status";
import Table from "@/components/global/Table";
import { cn, formatAmount } from "@/lib/utils";
import { useForm } from "react-hook-form";

const MaterialTransfer = () => {
    const methods = useForm();
    const data = [
        {
            materialName: "Cement",
            quantity: 200,
            totalValue: 10000000,
            source: "Warehouse 1",
            destination: "QGS_GK_001",
            pickUpDate: "1 Jul 2023",
            deliveryDate: "12 Jul 2023",
            status: "fully_delivered",
        },
        {
            materialName: "Block",
            quantity: 500,
            totalValue: 10000000,
            source: "Warehouse 1",
            destination: "QGS_GK_001",
            pickUpDate: "1 Jul 2023",
            deliveryDate: "12 Jul 2023",
            status: "picked_up",
        },
        {
            materialName: "Block",
            quantity: 500,
            totalValue: 10000000,
            source: "Warehouse 1",
            destination: "QGS_GK_001",
            pickUpDate: "1 Jul 2023",
            deliveryDate: "12 Jul 2023",
            status: "in_transit",
        },
        {
            materialName: "Block",
            quantity: 500,
            totalValue: 10000000,
            source: "Warehouse 1",
            destination: "QGS_GK_001",
            pickUpDate: "1 Jul 2023",
            deliveryDate: "12 Jul 2023",
            status: "picked_up",
        },
        {
            materialName: "Cement",
            quantity: 200,
            totalValue: 10000000,
            source: "Warehouse 1",
            destination: "QGS_GK_001",
            pickUpDate: "1 Jul 2023",
            deliveryDate: "12 Jul 2023",
            status: "fully_delivered",
        }, {
            materialName: "Cement",
            quantity: 200,
            totalValue: 10000000,
            source: "Warehouse 1",
            destination: "QGS_GK_001",
            pickUpDate: "1 Jul 2023",
            deliveryDate: "12 Jul 2023",
            status: "fully_delivered",
        },
        {
            materialName: "Block",
            quantity: 500,
            totalValue: 10000000,
            source: "Warehouse 1",
            destination: "QGS_GK_001",
            pickUpDate: "1 Jul 2023",
            deliveryDate: "12 Jul 2023",
            status: "picked_up",
        }, {
            materialName: "Block",
            quantity: 500,
            totalValue: 10000000,
            source: "Warehouse 1",
            destination: "QGS_GK_001",
            pickUpDate: "1 Jul 2023",
            deliveryDate: "12 Jul 2023",
            status: "picked_up",
        }, {
            materialName: "Block",
            quantity: 500,
            totalValue: 10000000,
            source: "Warehouse 1",
            destination: "QGS_GK_001",
            pickUpDate: "1 Jul 2023",
            deliveryDate: "12 Jul 2023",
            status: "picked_up",
        },
       
    ];

    const tableHeadData = [
        {
            title: "Material Name",
            key: "materialName",
        },
        {
            title: "Quantity",
            key: "quantity",
        },
        {
            title: "Total Value",
            key: "totalValue",
        },
        {
            title: "Source",
            key: "source",
        },
        {
            title: "Destination",
            key: "destination",
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
                        materialName,
                        quantity,
                        totalValue,
                        source,
                        destination,
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
                                {materialName}
                            </td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {quantity}
                            </td>
                            <td className='py-[18px] w-[100px] px-4 text-black-500 whitespace-nowrap'>
                                {formatAmount(+totalValue, "NGN")}
                            </td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {source}
                            </td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {destination}
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

export default MaterialTransfer;
