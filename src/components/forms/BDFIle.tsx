import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type TInputProps = {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
  onChange?: (file: File | null) => void;
};

const BDFile = ({
  name,
  required,
  onChange,
  label,
  className,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={null}
      render={({ field }) => (
        <div>
          {label && (
            <Label htmlFor={name} className="text-sm text-gray-700">
              {label}
            </Label>
          )}
          <Input
            id={name}
            type="file"
            accept="image/*"
            required={required}
            className={`h-12 ${className}`}
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              field.onChange(file);
              if (onChange) onChange(file); // Pass file to parent
            }}
          />
        </div>
      )}
    />
  );
};

export default BDFile;
