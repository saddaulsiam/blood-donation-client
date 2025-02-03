import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

type TInputProps = {
  name: string;
  type?: string;
  label?: string;
  required?: boolean;
  className?: string;
  defaultValue?: Date | string | null;
};

const BDDatePicker = ({
  name,
  required,
  label,
  className,
  defaultValue,
}: TInputProps) => {
  const { control } = useFormContext();

  const [date, setDate] = useState<Date | undefined>(() => {
    if (defaultValue) {
      return typeof defaultValue === "string"
        ? new Date(defaultValue)
        : defaultValue;
    }
    return undefined;
  });

  useEffect(() => {
    if (defaultValue) {
      setDate(
        typeof defaultValue === "string"
          ? new Date(defaultValue)
          : defaultValue,
      );
    }
  }, [defaultValue]);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue ? new Date(defaultValue).toISOString() : ""}
      render={({ field }) => (
        <Popover {...field}>
          <PopoverTrigger asChild className={className}>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>{label}</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date || undefined}
              onSelect={(selectedDate) => {
                if (selectedDate) {
                  setDate(selectedDate);
                  field.onChange(selectedDate?.toISOString());
                }
              }}
            />
          </PopoverContent>
        </Popover>
      )}
    />
  );
};

export default BDDatePicker;
