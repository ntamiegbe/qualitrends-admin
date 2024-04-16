"use client";

import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import Modal from "@/components/global/Modal";
import SelectInput from "@/components/global/SelectInput";
import Icons from "@/components/icons";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type CreateProjectModalProps = {
	showModal: boolean;
	setShowModal: (value: boolean) => void;
};

const CreateProjectModal = ({
	showModal,
	setShowModal,
}: CreateProjectModalProps) => {
	const [step, setStep] = useState<"create" | "success">("create");

	const methods = useForm({
		defaultValues: {
			code: "",
			type: null,
			budget: "",
			manager: null,
			summary: "",
			supervisor: null,
		},
	});

	const {
		formState: { errors, isValid },
		reset,
	} = methods;

	const onSubmit: SubmitHandler<any> = async (payload) => {
		try {
			setStep("success");
		} catch (err) {}
	};

	const stepProps = {
		create: {
			title: "Create New Project",
		},
		success: {
			title: "",
			width: "!w-[400px]",
			closeButtonStyle: "fill-primary",
			showHeaderBorder: false,
		},
	} as {
		[key: string]: {
			title: string;
			width?: string;
			closeButtonStyle?: string;
			showHeaderBorder?: boolean;
		};
	};

	return (
		<Modal
			title={stepProps[step].title}
			show={showModal}
			width={stepProps[step].width}
			closeButtonStyle={stepProps[step].closeButtonStyle}
			showHeaderBorder={stepProps[step].showHeaderBorder}
			onRequestClose={() => {
				setShowModal(false);
				setTimeout(() => {
					reset();
					setStep("create");
				}, 1000);
			}}>
			{step === "create" && (
				<section className='w-full'>
					<FormProvider {...methods}>
						<form
							onSubmit={methods.handleSubmit(onSubmit)}
							className='max-lg:space-y-6 lg:grid lg:grid-cols-2 lg:gap-x-9 gap-y-6'>
							<Input
								name='code'
								label='Project Code'
								rules={["required"]}
								placeholder='68_89GYN'
								left={<div className='font-medium text-sm px-3'>QGS - </div>}
								paddingLeft='pl-14'
							/>
							<SelectInput
								label='Project Type'
								name='type'
								required
								options={[
									{
										name: "Furniture",
										value: "furniture",
									},
									{
										name: "Concrete",
										value: "concrete",
									},
									{
										name: "Building",
										value: "building",
									},
								]}
								optionComponent={(option, selectedOption) => {
									return (
										<div
											className={`py-2 w-full px-4 flex items-center space-x-5 text-tc-main hover:bg-[#FF69001A] ${
												option?.value === selectedOption?.value
													? "bg-[#FF69001A]"
													: ""
											}`}>
											<div className='w-full text-sm flex items-center space-x-2'>
												<div>{option?.name}</div>
											</div>

											{option?.name === selectedOption?.name && (
												<div>
													<Icons.SelectedIcon />
												</div>
											)}
										</div>
									);
								}}
								trigger={(selected) => {
									return (
										<div className='flex h-min bg-transparent items-center space-x-1'>
											{selected ? (
												<div className='text-tc-main flex space-x-2 items-center text-sm'>
													<span>{selected.name}</span>
												</div>
											) : (
												<div className='text-sm mt-[2px] text-black-500'>
													Select Project Type
												</div>
											)}
										</div>
									);
								}}
							/>
							<Input
								name='budget'
								label='Project Budget'
								rules={["required"]}
								placeholder='Enter Budget'
							/>
							<SelectInput
								label='Project Manager'
								name='manager'
								required
								options={[
									{
										name: "John Doe",
										value: "john doe",
									},
									{
										name: "Jane Doe",
										value: "jane doe",
									},
									{
										name: "John Smith",
										value: "john smith",
									},
								]}
								optionComponent={(option, selectedOption) => {
									return (
										<div
											className={`py-2 w-full px-4 flex items-center space-x-5 text-tc-main hover:bg-[#FF69001A] ${
												option?.value === selectedOption?.value
													? "bg-[#FF69001A]"
													: ""
											}`}>
											<div className='w-full text-sm flex items-center space-x-2'>
												<div>{option?.name}</div>
											</div>

											{option?.name === selectedOption?.name && (
												<div>
													<Icons.SelectedIcon />
												</div>
											)}
										</div>
									);
								}}
								trigger={(selected) => {
									return (
										<div className='flex h-min bg-transparent items-center space-x-1'>
											{selected ? (
												<div className='text-tc-main flex space-x-2 items-center text-sm'>
													<span>{selected.name}</span>
												</div>
											) : (
												<div className='text-sm mt-[2px] text-black-500'>
													Select Project Manager
												</div>
											)}
										</div>
									);
								}}
							/>
							<Input
								name='summary'
								label='Project Summary'
								rules={["required"]}
								placeholder='Enter Project Summary'
								tag='textarea'
							/>
							<SelectInput
								label='Project Supervisor'
								name='supervisor'
								required
								options={[
									{
										name: "John Doe",
										value: "john doe",
									},
									{
										name: "Jane Doe",
										value: "jane doe",
									},
									{
										name: "John Smith",
										value: "john smith",
									},
								]}
								optionComponent={(option, selectedOption) => {
									return (
										<div
											className={`py-2 w-full px-4 flex items-center space-x-5 text-tc-main hover:bg-[#FF69001A] ${
												option?.value === selectedOption?.value
													? "bg-[#FF69001A]"
													: ""
											}`}>
											<div className='w-full text-sm flex items-center space-x-2'>
												<div>{option?.name}</div>
											</div>

											{option?.name === selectedOption?.name && (
												<div>
													<Icons.SelectedIcon />
												</div>
											)}
										</div>
									);
								}}
								trigger={(selected) => {
									return (
										<div className='flex h-min bg-transparent items-center space-x-1'>
											{selected ? (
												<div className='text-tc-main flex space-x-2 items-center text-sm'>
													<span>{selected.name}</span>
												</div>
											) : (
												<div className='text-sm mt-[2px] text-black-500'>
													Select Project Supervisor
												</div>
											)}
										</div>
									);
								}}
							/>
							<div className='lg:col-span-2 flex justify-center py-4'>
								<Button
									type='submit'
									disabled={!isValid}
									className='w-full lg:w-[240px]'>
									Create
								</Button>
							</div>
						</form>
					</FormProvider>
				</section>
			)}

			{step === "success" && (
				<section className='flex flex-col h-full justify-center items-center space-y-4'>
					<Icons.SuccessIcon />
					<p className='pb-10'>Project created successfully</p>
				</section>
			)}
		</Modal>
	);
};

export default CreateProjectModal;
