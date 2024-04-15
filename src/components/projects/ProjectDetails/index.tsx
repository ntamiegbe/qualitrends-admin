import Status, { StatusType } from "@/components/global/Status";
import { cn } from "@/lib/utils";

const ProjectDetails = () => {
	const data = [
		{
			label: "Project Code",
			value: "CPD1",
		},
		{
			label: "Project Type",
			value: "Wuse_1391",
		},
		{
			label: "Project Manager",
			value: "Aliu Akinlabi",
		},
		{
			label: "Project Summary",
			value:
				"5 (Five) Bedroom Semi-Detached Duplex with one maid’s room in Qualitrends-Gudu Residence 1416, ",
		},
		{
			label: "Project Supervisor",
			value: "John Doe",
		},
		{
			label: "Status",
			value: "sold",
			isStatus: true,
		},
	];

	return (
		<section>
			<h3 className='bg-[#FFF0E5] max-lg:mb-4 p-2.5 lg:py-4 lg:px-5 lg:text-xl font-semibold'>
				Project Details
			</h3>
			<ul className='grid grid-cols-1 max-lg:roundedm bg-white max-lg:drop-shadow-md lg:grid-cols-2 max-lg:py-4 lg:mt-10 gap-y-5 lg:gap-6 px-5'>
				{data.map((item, index) => {
					return (
						<li
							key={index}
							className='max-lg:text-sm max-lg:space-y-2 lg:flex items-center'>
							<div className='w-52 text-black-500'>{item.label}:</div>
							<div
								className={cn("font-semibold lg:w-[calc(100%-230px)]", {
									"text-primary": index === 0,
								})}>
								{item.isStatus ? (
									<Status status={item.value as StatusType} />
								) : (
									item.value
								)}
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default ProjectDetails;
