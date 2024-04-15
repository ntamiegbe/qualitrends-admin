type ProjectDetailsStatsProps = {
	data: {
		label: string;
		value: string;
	}[];
};

const ProjectDetailsStats = ({ data }: ProjectDetailsStatsProps) => {
	return (
		<ul className='flex space-x-4 items-center'>
			{data?.map((item, index) => {
				return (
					<li key={index}>
						<div className='bg-white w-[131px] drop-shadow-md space-y-2 rounded-lg py-4 px-2'>
							<div className='font-semibold text-black-500'>{item.value}</div>
							<div className='text-xs text-primary'>{item.label}</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default ProjectDetailsStats;
