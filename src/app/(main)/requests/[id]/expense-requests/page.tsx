"use client";

import { useParams } from "next/navigation";

const ExpenseRequestsDetailsPage = () => {

    const params = useParams();

    return <div>{params.id}</div>;
};

export default ExpenseRequestsDetailsPage;
