import { useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
    label?: string;
    name: string;
    required?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const SwitchInput = ({ label, name, required, ...rest }: Props) => {
    const { register } = useFormContext();
    const [isChecked, setIsChecked] = useState(false);

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setIsChecked(e.target.checked);
    // };

    return (
        <div className='flex items-center justify-center w-full'>
            <label htmlFor={name} className='flex items-center cursor-pointer'>
                <div className='relative'>
                    <input
                        type='checkbox'
                        id={name}
                        {...rest}
                        {...register(name, {
                            required,
                        })}
                        onChange={() => setIsChecked(!isChecked)}
                        className='sr-only'
                    />
                    <div className={`block background w-12 h-6 rounded-full ${isChecked ? 'bg-black-500 ' : 'bg-white border-2 border-black-500'}`}></div>
                    <div className={`dot absolute left-1 top-1 ${isChecked ? 'bg-white' : 'bg-gray-600'} w-4 h-4 rounded-full transition`}></div>
                </div>
                {label && <div className='ml-3 text-gray-700 font-medium'>{label}</div>}
            </label>
        </div>
    );
};

export default SwitchInput;
