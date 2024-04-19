"use client";

import WarehouseInventoryDetails from "@/components/warehouse/WarehouseInventoryDetails";
import { useParams } from "next/navigation";

const WarehouseInventoryDetailsPage = () => {

    const params = useParams();

    return (
        <WarehouseInventoryDetails />
    );
};

export default WarehouseInventoryDetailsPage;
