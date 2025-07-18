"use client";

import Status, { StatusType } from "@/components/global/Status";
import Table from "@/components/global/Table";
import Icons from "@/components/icons";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const WarehouseSupplyRequests = () => {
    const router = useRouter();

    const data = [
        {
            id: "100AD",
            requester: "Cement",
            destination: "Site 2 at Wuse",
            dateCreated: "12 Jul 2023",
            status: "pending",
        },
        {
            id: "100AD",
            requester: "Cement",
            destination: "Site 2 at Wuse",
            dateCreated: "12 Jul 2023",
            status: "approved",
        },
        {
            id: "100AD",
            requester: "Cement",
            destination: "Site 2 at Wuse",
            dateCreated: "12 Jul 2023",
            status: "pending",
        },
        {
            id: "100AD",
            requester: "Cement",
            destination: "Site 2 at Wuse",
            dateCreated: "12 Jul 2023",
            status: "approved",
        },
        {
            id: "100AD",
            requester: "Cement",
            destination: "Site 2 at Wuse",
            dateCreated: "12 Jul 2023",
            status: "declined",
        },
        {
            id: "100AD",
            requester: "Cement",
            destination: "Site 2 at Wuse",
            dateCreated: "12 Jul 2023",
            status: "pending",
        }
    ];

    const tableHeadData = [
        {
            title: "ID",
            key: "id",
        },
        {
            title: "Requester",
            key: "requester",
        },
        {
            title: "Destination",
            key: "destination",
        },
        {
            title: "Date Created",
            key: "dateCreated",
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
                        requester,
                        destination,
                        dateCreated,
                        status,
                    } = transaction;
                    return (
                        <tr
                            onClick={() => {
                                router.push("/requests/" + id + "/warehouse-supply-requests/");
                            }}
                            className={cn("text-sm cursor-pointer border-[#5A5A5A99]", {
                                "border-b": index !== length - 1,
                            })}>
                            <td className='p-4 text-black-500 whitespace-nowrap'>{id}</td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {requester}
                            </td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {destination}
                            </td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                {dateCreated}
                            </td>
                            <td className='p-4 text-black-500 whitespace-nowrap'>
                                <Status status={status as StatusType} />
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

export default WarehouseSupplyRequests;
