import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";

interface ITextField {
  name: string;
  label?: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  defaultValue?: string;
  values: string[];
}

const BDSelect = ({
  name,
  label,
  required,
  className,
  placeholder,
  defaultValue,
  values,
}: ITextField) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <div>
          {label && (
            <Label htmlFor={name} className="text-sm text-gray-700">
              {label}
            </Label>
          )}

          <Select
            {...field}
            onValueChange={(value) => field.onChange(value)}
            required={required}
          >
            <SelectTrigger className={`${className}`}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{label}</SelectLabel>

                {values?.map((group) => (
                  <SelectItem key={group} value={group}>
                    {group}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}
    />
  );
};

export default BDSelect;
