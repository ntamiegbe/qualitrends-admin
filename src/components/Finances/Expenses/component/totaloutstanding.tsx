import { cn } from "@/lib/utils";

type totaloutstanding = {
    value: number;
};

const totaloutstanding = ({ value }: totaloutstanding) => {
    // Determine the color based on whether it's a debit or credit
    const balanceColorClass = value < 0 ? "text-red-500" : " text-black-500";

    return (
        <div className={cn("text-sm", balanceColorClass)}>
            {value.toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
                minimumFractionDigits: 2,
            })}
        </div>
    );
};

export default totaloutstanding;