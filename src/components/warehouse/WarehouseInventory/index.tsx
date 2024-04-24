"use client";

import SwitchInput from "@/components/global/SwitchInput";
import Table from "@/components/global/Table";
import Icons from "@/components/icons";
import { cn, formatAmount } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

const WarehouseInventory = () => {
    const methods = useForm();
    const router = useRouter()

    const data = [
        {
            id: "WHV_23_1",
            itemName: "Wood",
            itemCategory: "Timer",
            stockQuantity: 10,
            unitPrice: 10000000,
            totalValue: 100000000,
        },
        {
            id: "WHV_23_1",
            itemName: "Wood",
            itemCategory: "Timer",
            stockQuantity: 10,
            unitPrice: 10000000,
            totalValue: 100000000,
        },
        {
            id: "WHV_23_1",
            itemName: "Wood",
            itemCategory: "Timer",
            stockQuantity: 10,
            unitPrice: 10000000,
            totalValue: 100000000,
        },
        {
            id: "WHV_23_1",
            itemName: "Wood",
            itemCategory: "Timer",
            stockQuantity: 10,
            unitPrice: 10000000,
            totalValue: 100000000,
        },
        {
            id: "WHV_23_1",
            itemName: "Wood",
            itemCategory: "Timer",
            stockQuantity: 10,
            unitPrice: 10000000,
            totalValue: 100000000,
        },
        {
            id: "WHV_23_1",
            itemName: "Wood",
            itemCategory: "Timer",
            stockQuantity: 10,
            unitPrice: 10000000,
            totalValue: 100000000,
        },
        {
            id: "WHV_23_1",
            itemName: "Wood",
            itemCategory: "Timer",
            stockQuantity: 10,
            unitPrice: 10000000,
            totalValue: 100000000,
        },
        {
            id: "WHV_23_1",
            itemName: "Wood",
            itemCategory: "Timer",
            stockQuantity: 10,
            unitPrice: 10000000,
            totalValue: 100000000,
        },
        {
            id: "WHV_23_1",
            itemName: "Wood",
            itemCategory: "Timer",
            stockQuantity: 10,
            unitPrice: 10000000,
            totalValue: 100000000,
        },
        {
            id: "WHV_23_1",
            itemName: "Wood",
            itemCategory: "Timer",
            stockQuantity: 10,
            unitPrice: 10000000,
            totalValue: 100000000,
        },
        {
            id: "WHV_23_1",
            itemName: "Wood",
            itemCategory: "Timer",
            stockQuantity: 10,
            unitPrice: 10000000,
            totalValue: 100000000,
        },
        {
            id: "WHV_23_1",
            itemName: "Wood",
            itemCategory: "Timer",
            stockQuantity: 10,
            unitPrice: 10000000,
            totalValue: 100000000,
        },
        {
            id: "WHV_23_1",
            itemName: "Wood",
            itemCategory: "Timer",
            stockQuantity: 10,
            unitPrice: 10000000,
            totalValue: 100000000,
        },
        {
            id: "WHV_23_1",
            itemName: "Wood",
            itemCategory: "Timer",
            stockQuantity: 10,
            unitPrice: 10000000,
            totalValue: 100000000,
        },
        {
            id: "WHV_23_1",
            itemName: "Wood",
            itemCategory: "Timer",
            stockQuantity: 10,
            unitPrice: 10000000,
            totalValue: 100000000,
        },
        {
            id: "WHV_23_1",
            itemName: "Wood",
            itemCategory: "Timer",
            stockQuantity: 10,
            unitPrice: 10000000,
            totalValue: 100000000,
        },
        {
            id: "WHV_23_1",
            itemName: "Wood",
            itemCategory: "Timer",
            stockQuantity: 10,
            unitPrice: 10000000,
            totalValue: 100000000,
        },
    ];

    const tableHeadData = [
        {
            title: "ID",
            key: "id",
        },
        {
            title: "Item Name",
            key: "itemName",
        },
        {
            title: "Item Category",
            key: "itemCategory",
        },
        {
            title: "Stock Quantity",
            key: "stockQuantity",
        },
        {
            title: "Unit Price",
            key: "unitPrice",
        },
        {
            title: "Total Value",
            key: "totalValue",
        },
        {
            title: "Status",
            key: "status",
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
                        itemName,
                        itemCategory,
                        stockQuantity,
                        unitPrice,
                        totalValue,
                    } = transaction;
                    return (
                        <tr
                            onClick={() => {
                                router.push("/warehouse/" + id + "/warehouse-inventory");
                            }}
                            className={cn("text-sm border-[#5A5A5A99] cursor-pointer", {
                                "border-b": index !== length - 1,
                            })}>
                            <td className='p-4 text-black-500 whitespace-nowrap'>{id}</td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {itemName}
                            </td>
                            <td className='py-[18px] w-[100px] px-4 text-black-500 whitespace-nowrap'>
                                {itemCategory}
                            </td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {stockQuantity}
                            </td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {formatAmount(+unitPrice, "NGN")}
                            </td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {formatAmount(+totalValue, "NGN")}
                            </td>
                            <td className='p-4'>
                                <FormProvider {...methods}>
                                    <form>
                                        <SwitchInput name="Name" />
                                    </form>
                                </FormProvider>
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

export default WarehouseInventory;
