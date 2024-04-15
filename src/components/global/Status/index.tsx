import { cn } from "@/lib/utils";

export type StatusType =
	| "sold"
	| "handed_over"
	| "in_warehouse"
	| "out_on_lease"
	| "pending"
	| "declined"
	| "approved"
<<<<<<< HEAD
	| "credit";
=======
	| "fully_delivered"
	| "partial_delivery"
	| "in_transit"
	| "picked_up"
	| "awaiting_pickup"
	| "delivered";
>>>>>>> 7789c6bbcc6347880fac9ebdeb7a8fc960647dc8

type StatusProps = {
	status: StatusType;
};

type StatusColorMap = {
	[key: string]: StatusType[];
};

const Status = ({ status }: StatusProps) => {
	const statusColorMap: StatusColorMap = {
		"text-primary bg-[#FF00001A]": [
			"handed_over",
			"awaiting_pickup",
			"in_transit",
		],
		"text-status-success-100 bg-status-success-10": [
			"in_warehouse",
			"approved",
			"fully_delivered",
			"partial_delivery",
			"delivered",
		],
		"text-status-error-100 bg-status-error-10": ["sold", "declined", "credit"],
		"text-status-warning-500 bg-status-warning-10": ["out_on_lease", "pending"],
		"text-status-information-100 bg-status-information-100/10": ["picked_up"],
	};

	const statusDotColorMap: StatusColorMap = {
		"bg-primary": ["handed_over", "in_transit", "awaiting_pickup"],
		"bg-status-success-100": [
			"in_warehouse",
			"approved",
			"fully_delivered",
			"partial_delivery",
			"delivered",
		],
		"bg-status-error-100": ["sold", "declined"],
		"bg-status-warning-500": ["out_on_lease", "pending"],
		"bg-status-information-100": ["picked_up"],
	};

	const getStatusColor = (status: StatusType) => {
		return Object.entries(statusColorMap).reduce((acc, [key, value]) => {
			if (value.includes(status)) {
				return key;
			}
			return acc;
		}, "");
	};

	const getDotColor = (status: StatusType) => {
		return Object.entries(statusDotColorMap).reduce((acc, [key, value]) => {
			if (value.includes(status)) {
				return key;
			}
			return acc;
		}, "");
	};

	return (
		<div
			className={cn(
				"w-fit flex items-center space-x-2.5 capitalize text-sm py-1 px-4 rounded-[100px]",
				getStatusColor(status)
			)}>
			<div className={cn("size-2 rounded-full", getDotColor(status))} />
			<div>{status.replace(/_/g, " ")}</div>
		</div>
	);
};

export default Status;
