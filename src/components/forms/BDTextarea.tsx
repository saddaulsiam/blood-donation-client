import { Controller, useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type TInputProps = {
  name: string;
  label?: string;
  required?: boolean;
  placeholder: string;
  className?: string;
  rows?: number;
};

const BDTextarea = ({
  name,
  required,
  label,
  rows,
  className,
  placeholder,
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
          <Textarea
            rows={rows}
            {...field}
            name={name}
            placeholder={placeholder}
            required={required}
            className={className}
          />
        </div>
      )}
    />
  );
};

export default BDTextarea;
