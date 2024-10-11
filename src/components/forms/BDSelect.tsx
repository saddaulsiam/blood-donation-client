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

interface ITextField {
  name: string;
  label: string;
  required?: boolean;
  className?: string;
  bloodGroups: string[];
}

const BDSelect = ({
  name,
  label,
  required,
  className,
  bloodGroups,
}: ITextField) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          onValueChange={(value) => field.onChange(value)}
          required={required}
        >
          <SelectTrigger className={className}>
            <SelectValue placeholder={label} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{label}</SelectLabel>

              {bloodGroups?.map((group) => (
                <SelectItem key={group} value={group}>
                  {group}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
};

export default BDSelect;
