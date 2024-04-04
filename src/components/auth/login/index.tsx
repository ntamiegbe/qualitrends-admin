"use client";

import Button from "@/components/global/Button";
import Checkbox from "@/components/global/Checkbox";
import Input from "@/components/global/Input";
import Icons from "@/components/icons";
import { FormProvider, useForm } from "react-hook-form";

const Login = () => {
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
		<div className='w-full bg-white min-h-screen grid grid-cols-3'>
			<main className='col-span-1 flex items-center justify-center'>
				<div className='space-y-10 w-full max-w-[332px] px-4'>
					<div className='space-y-2 text-center'>
						<h1 className='text-3xl font-semibold'>Welcome Back!</h1>
						<p>Log in with your details below</p>
					</div>

					<FormProvider {...methods}>
						<form>
							<div className='space-y-6'>
								<Input
									label='Email Address'
									name='email'
									type='email'
									placeholder='user@example.com'
									rules={["required", "email"]}
									paddingRight='pr-12'
									right={
										<div className='w-9'>
											<Icons.EmailIcon />
										</div>
									}
								/>
								<Input
									label='Password'
									name='password'
									type='password'
									placeholder='user@example.com'
									rules={["required"]}
								/>
							</div>
							<div className='mt-6 flex items-center space-x-4 justify-between'>
								<Checkbox
									name='rememberMe'
									label='Keep me logged in'
									labelClassName='text-sm'
								/>
								<button className='text-sm text-primary font-bold underline'>
									Forgot Password?
								</button>
							</div>
							<div className='max-w-[240px] mt-20 mx-auto'>
								<Button disabled={!isValid} className='w-full'>
									Login
								</Button>
							</div>
						</form>
					</FormProvider>
				</div>
			</main>
			<aside className='col-span-2 py-10 px-16'>
				<div className='relative h-full'>
					<div className='absolute w-full h-full border-[5px] border-primary'></div>
					<div className='relative w-full h-full'>
						<div className="h-[calc(100%-128px)] w-full flex justify-center items-center absolute  top-1/2 transform -translate-y-1/2 -left-16 bg-[url('/assets/images/auth-bg.jpg')] bg-cover bg-no-repeat bg-center">
							<Icons.Logo />
						</div>
					</div>
				</div>
			</aside>
		</div>
	);
};

export default Login;
