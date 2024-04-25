"use client";

import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import Modal from "@/components/global/Modal";
import SelectInput from "@/components/global/SelectInput";
import Icons from "@/components/icons";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type IncomingPaymentModalProps = {
	showModal: boolean;
	setShowModal: (value: boolean) => void;
};

const IncomingPaymentModal = ({
	showModal,
	setShowModal,
}: IncomingPaymentModalProps) => {
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
			title: "Make Payment For Expense",
		},
		success: {
			title: "",
			width: "!w-[200px]",
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
							className='max-lg:space-y-6 flex flex-col  gap-4'>
								
							<Input
								name='transcatID'
								label='Transaction ID'
								rules={["required"]}
								left={<div className='font-medium text-sm px-3'>1000</div>}
								placeholder=''
							/>
								<SelectInput
									label='Expense Name'
									name='expensename'
									required
									options={[
										{
											name: "outgoing",
											value: "out",
										},
										{
											name: "incominge",
											value: "in",
										},
									]}
									optionComponent={(option, selectedOption) => {
										return (
											<div
												className={cn(
													"py-2 w-full border-b px-4 flex items-center space-x-5 text-tc-main hover:bg-[#FF69001A]",
													{
														"bg-[#FF69001A]":
															option?.value === selectedOption?.value,
													}
												)}>
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
														Select 
													</div>
												)}
											</div>
										);
									}}
								/>
							<Input
								label='Transaction Type'
								name='TransType'
								required
								placeholder="Expense"
							/>
							{/* <Input
								name='budget'
								label='Project Budget'
								rules={["required"]}
								placeholder='Enter Budget'
							/> */}
							<SelectInput
								label='Supplier'
								name='supplier'
								required
								options={[
									{
										name: "Wuse_1365",
										value: "Wuse_1365",
									},
									{
										name: "Idu_294_pmt",
										value: "idu",
									},
									{
										name: "Maleek Ltd",
										value: "maleek inc",
									},
									{
										name: "Wuye_366_pmt",
										value: "wuye",
									},
									{
										name: "Dape_1_218_pmt",
										value: "dape",
									},
								]}
								optionComponent={(option, selectedOption) => {
									return (
										<div
											className={cn(
												"py-2 w-full border-b px-4 flex items-center space-x-5 text-tc-main hover:bg-[#FF69001A]",
												{
													"bg-[#FF69001A]":
														option?.value === selectedOption?.value,
												}
											)}>
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
													Select    
												</div>
											)}
										</div>
									);
								}}
							/>
							<SelectInput
								label='Source Account'
								name='SAccount'
								required
								options={[
									{
										name: "Old",
										value: "old",
									},
									{
										name: "New",
										value: "new",
									},
								]}
								optionComponent={(option, selectedOption) => {
									return (
										<div
											className={cn(
												"py-2 w-full border-b px-4 flex items-center space-x-5 text-tc-main hover:bg-[#FF69001A]",
												{
													"bg-[#FF69001A]":
														option?.value === selectedOption?.value,
												}
											)}>
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
													Select 
												</div>
											)}
										</div>
									);
								}}
							/>
							<Input
								name='Amount Paid'
								label='Amount Paid'
								placeholder='Enter Amount'
							/>
							<div className='lg:col-span-2 flex justify-center py-4'>
								<Button
									type='submit'
									disabled={!isValid}
									className='w-full lg:w-[240px]'>
									Save
								</Button>
							</div> 
						</form>
					</FormProvider>
				</section>
			)}

			{step === "success" && (
				<section className='flex flex-col h-full justify-center items-center space-y-4'>
					<Icons.SuccessIcon />
					<p className='pb-10 text-center'>Payment Made successfully</p>
				</section>
			)}
		</Modal>
	);
};

export default IncomingPaymentModal;
