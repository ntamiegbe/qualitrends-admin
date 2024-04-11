import Warehouse from "@/components/warehouse/Warehouse";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Warehouse",
};

const WarehousePage = () => {
	return <Warehouse />;
};

export default WarehousePage;
