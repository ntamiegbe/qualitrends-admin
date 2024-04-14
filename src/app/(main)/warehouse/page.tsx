"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WarehousePage() {
	const router = useRouter();

	useEffect(() => {
		router.push("/warehouse/purchase-order");
	}, []);
	return <main className=''></main>;
}
