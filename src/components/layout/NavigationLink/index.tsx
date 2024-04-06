import Icons from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavigationLinkProps = {
	link: {
		name: string;
		to: string;
		icon: React.ReactNode;
		children?: {
			name: string;
			to: string;
		}[];
	};
};

const NavigationLink = ({ link }: NavigationLinkProps) => {
	const [expanded, setExpanded] = useState(false);

	const pathname = usePathname();

	useEffect(() => {
		if (pathname.split("/")[1] !== link.to.split("/")[1]) setExpanded(false);
	}, [pathname]);

	if (link.children)
		return (
			<li className='w-full' key={link.name}>
				<button
					onClick={() => setExpanded(!expanded)}
					className={cn(
						"transition-all flex items-center justify-between space-x-4 rounded-lg w-full text-white px-4 py-3",
						{
							"bg-white text-primary font-semibold": pathname.includes(link.to),
						}
					)}>
					<div className='flex items-center space-x-6'>
						<div
							className={cn("fill-white transition-all", {
								"fill-primary": pathname.includes(link.to),
							})}>
							{link.icon}
						</div>
						<div className=''>{link.name}</div>
					</div>
					<div
						className={cn("transition-all", {
							"transform rotate-180": expanded,
						})}>
						<Icons.CaretIcon
							className={cn("fill-white", {
								"fill-primary": pathname.includes(link.to),
							})}
						/>
					</div>
				</button>

				<ul
					className={cn(
						"mt-2 transition-max-height max-h-0 overflow-hidden bg-white rounded",
						{
							"max-h-[200px]": expanded,
						}
					)}>
					{link.children.map((child) => {
						return (
							<li key={child.name}>
								<Link
									className={cn(
										"block text-sm transition-all text-black-900 px-8 py-[18.5px]",
										{
											"font-semibold text-primary": pathname.includes(child.to),
										}
									)}
									href={child.to}>
									{child.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</li>
		);
	return (
		<li key={link.name}>
			<Link
				href={link.to}
				className={cn(
					"block transition-all rounded-lg w-full text-white px-4 py-3",
					{
						"bg-white text-primary font-semibold": pathname.includes(link.to),
					}
				)}>
				<div className='flex items-center space-x-6'>
					<div
						className={cn("fill-white transition-all", {
							"fill-primary": pathname.includes(link.to),
						})}>
						{link.icon}
					</div>
					<div className=''>{link.name}</div>
				</div>
				<div></div>
			</Link>
		</li>
	);
};

export default NavigationLink;
