"use client";

import { useParams } from "next/navigation";

const MaterialTransferRequestsDetailsPage = () => {

    const params = useParams();

    return <div>{params.id}</div>;
};

export default MaterialTransferRequestsDetailsPage;
