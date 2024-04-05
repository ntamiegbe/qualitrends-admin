import Input from "@/components/global/Input";
import Icons from "@/components/icons";
import { FormProvider, useForm } from "react-hook-form";

const Header = () => {
	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const {
		formState: { errors, isValid },
		watch,
	} = methods;

	return (
		<header className='px-8 py-4 fixed top-0 right-0 w-[calc(100%-278px)] shadow-sm'>
			<div className='flex items-center justify-between space-x-5'>
				<FormProvider {...methods}>
					<form>
						<div className='w-[300px]'>
							<Input
								name='search'
								placeholder='Search'
								paddingLeft='pl-11'
								type='search'
								left={
									<div className='w-9 pl-3'>
										<Icons.SearchIcon />
									</div>
								}
							/>
						</div>
					</form>
				</FormProvider>

				<div className='flex items-center space-x-6'>
					<button className='flex justify-center items-center p-4 rounded border border-primary'>
						<Icons.PlusIcon />
					</button>
					<div className='w-[1px] h-10 bg-[#CBCFD3]' />
					<button className='flex justify-center items-center '>
						<Icons.NotificationsIcon />
					</button>
					<div className='w-[1px] h-10 bg-[#CBCFD3]' />
					<button className='flex items-center space-x-4'>
						<div className='size-8 rounded-full border border-[#FFE2D2] bg-primary flex items-center justify-center text-xs text-white font-bold'>
							DD
						</div>
						<div className='text-black-900'>
							<div className='font-medium'>Daniel Donald</div>
							<div className='text-xs'>Super Admin</div>
						</div>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
