"use client";

import { useParams } from "next/navigation";

const PurchaseOrderRequestsDetailsPage = () => {

    const params = useParams();

    return <div>{params.id}</div>;
};

export default PurchaseOrderRequestsDetailsPage;
