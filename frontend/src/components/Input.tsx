import { FormInputProps } from '@/@types/form-input-props';

export default function Input({ labelText, inputType, id, placeholder }: FormInputProps) {
  return (
    <label
      htmlFor={id}
      className="text-20px text-light flex flex-col h-80px w-80% justify-self-center smdvc-400px:text-14px mddvc-540px:text-16px dvc-brkpt-768px:text-18px"
    >
      {labelText}
      <input
        id={id}
        type={inputType}
        placeholder={placeholder}
        className="rounded-md h-40px border border-solid border-grey-contrast px-10px bg-transparent"
      />
    </label>
  );
}
