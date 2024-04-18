"use client";

import { useParams } from "next/navigation";

const ExpenseRequestsDetails = () => {

    const params = useParams();

    return <div>{params.id}</div>;
};

export default ExpenseRequestsDetails;
