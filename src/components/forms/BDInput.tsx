import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

type TInputProps = {
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

const BDInput = ({
  name,
  type = "text",
  required,
  placeholder,
  className,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <Input
          {...field}
          type={type}
          placeholder={placeholder}
          required={required}
          className={className}
        />
      )}
    />
  );
};

export default BDInput;
