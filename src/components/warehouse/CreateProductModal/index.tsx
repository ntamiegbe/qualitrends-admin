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

type CreateProductModalProps = {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
};

const CreateProductModal = ({
    showModal,
    setShowModal,
}: CreateProductModalProps) => {
    const [step, setStep] = useState<"create" | "success">("create");
    const [totalValue, setTotalValue] = useState<number>(0);

    const methods = useForm({
        defaultValues: {
            id: "",
            stockQuantity: "",
            itemType: null,
            leaseAvailability: "",
            valuePerUnit: "",
        },
    });

    const {
        formState: { errors, isValid },
        reset,
        watch,
    } = methods;

    const watchStockQuantity = watch("stockQuantity");
    const watchValuePerUnit = watch("valuePerUnit");

    useEffect(() => {
        if (watchStockQuantity && watchValuePerUnit) {
            const stockQuantity = parseInt(watchStockQuantity);
            const valuePerUnit = parseInt(watchValuePerUnit);
            const calculatedTotalValue = stockQuantity * valuePerUnit;
            setTotalValue(calculatedTotalValue);
        }
    }, [watchStockQuantity, watchValuePerUnit]);

    const onSubmit: SubmitHandler<any> = async (payload) => {
        try {
            setStep("success");
        } catch (err) { }
    };

    const stepProps = {
        create: {
            title: "Create Warehouse Item",
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
                                name='id'
                                label='ID'
                                disabled
                                value='68_89GYN'
                            />
                            <Input
                                name='stockQuantity'
                                label='Stock Number'
                                type="number"
                                rules={["required"]}
                                placeholder='Stock Number'
                            />
                            <SelectInput
                                label='Item Type'
                                name='itemType'
                                required
                                options={[
                                    {
                                        name: "Wood",
                                        value: "wood",
                                    },
                                    {
                                        name: "Concrete",
                                        value: "concrete",
                                    },
                                    {
                                        name: "Steel",
                                        value: "steel",
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
                                                    Select Item Type
                                                </div>
                                            )}
                                        </div>
                                    );
                                }}
                            />
                            <Input
                                name='valuePerUnit'
                                label='Value Per Unit'
                                type="number"
                                rules={["required"]}
                                placeholder='Value Per Unit'
                            />
                            <Checkbox
                                name='leaseAvailability'
                                id='leaseAvailability'
                                label='Lease Availability'
                                labelClassName='text-sm'
                            />
                            <Input
                                name='totalValue'
                                label='Total Value'
                                disabled
                                value={formatAmount(totalValue, "NGN", false)}
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
                    <p className='pb-10 text-center'>Project created successfully</p>
                </section>
            )}
        </Modal>
    );
};

export default CreateProductModal;
