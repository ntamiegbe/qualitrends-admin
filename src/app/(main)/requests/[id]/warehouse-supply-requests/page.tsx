"use client";

import { useParams } from "next/navigation";

const WarehouseSupplyRequestsDetailsPage = () => {

    const params = useParams();

    return <div>{params.id}</div>;
};

export default WarehouseSupplyRequestsDetailsPage;
