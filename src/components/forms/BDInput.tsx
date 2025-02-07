import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type TInputProps = {
  name: string;
  type?: string;
  label?: string;
  placeholder: string;
  required?: boolean;
  className?: string;
};

const BDInput = ({
  name,
  type = "text",
  required,
  label,
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
        <div>
          {label && (
            <Label htmlFor={name} className="text-sm text-gray-700">
              {label}
            </Label>
          )}
          <Input
            id={name}
            {...field}
            type={type}
            placeholder={placeholder}
            required={required}
            className={`h-12 ${className}`}
          />
        </div>
      )}
    />
  );
};

export default BDInput;
