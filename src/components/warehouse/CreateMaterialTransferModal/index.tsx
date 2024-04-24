"use client";

import Button from "@/components/global/Button";
import Checkbox from "@/components/global/Checkbox";
import Input from "@/components/global/Input";
import Modal from "@/components/global/Modal";
import SelectInput from "@/components/global/SelectInput";
import Icons from "@/components/icons";
import { cn, formatAmount } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type CreateMaterialTransferModalProps = {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
};

const CreateMaterialTransferModal = ({
    showModal,
    setShowModal,
}: CreateMaterialTransferModalProps) => {
    const [step, setStep] = useState<"create" | "success">("create");
    const [totalValue, setTotalValue] = useState<number>(0);

    const methods = useForm({
        defaultValues: {
            id: "",
            projectName: null,
            supplierName: null,
        },
    });

    const {
        formState: { errors, isValid },
        reset,
        watch,
    } = methods;

    // const watchStockQuantity = watch("stockQuantity");
    // const watchValuePerUnit = watch("valuePerUnit");

    // useEffect(() => {
    //     if (watchStockQuantity && watchValuePerUnit) {
    //         const stockQuantity = parseInt(watchStockQuantity);
    //         const valuePerUnit = parseInt(watchValuePerUnit);
    //         const calculatedTotalValue = stockQuantity * valuePerUnit;
    //         setTotalValue(calculatedTotalValue);
    //     }
    // }, [watchStockQuantity, watchValuePerUnit]);

    const onSubmit: SubmitHandler<any> = async (payload) => {
        try {
            setStep("success");
        } catch (err) { }
    };

    const stepProps = {
        create: {
            title: "Create Material Transfer Request",
            width: "!w-[565px]",
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
                            className='space-y-6'>
                            <Input
                                name='id'
                                label='ID'
                                disabled
                                value='68_89GYN'
                            />
                            <SelectInput
                                label='Supplier Name'
                                name='supplierName'
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
                                                    Select Supplier
                                                </div>
                                            )}
                                        </div>
                                    );
                                }}
                            />
                            <SelectInput
                                label='Project Name'
                                name='projectName'
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
                                                    Select Project Name
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
                    <p className='pb-10 text-center'>Product created successfully</p>
                </section>
            )}
        </Modal>
    );
};

export default CreateMaterialTransferModal;
