import React from "react";
import { Textarea } from "../ui/textarea";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
  rows?: number;
};

const BDTextarea = ({
  name,
  required,
  label,
  rows,
  className,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <Textarea
          rows={rows}
          {...field}
          name={name}
          placeholder={label}
          required={required}
          className={className}
        />
      )}
    />
  );
};

export default BDTextarea;
