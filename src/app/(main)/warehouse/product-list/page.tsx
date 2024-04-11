"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProductListPage() {
	const router = useRouter();

	useEffect(() => {
		router.push("/warehouse/product-list/warehouse-inventory");
	}, []);
	return <main className=''></main>;
}
