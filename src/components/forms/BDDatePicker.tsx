import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

type TInputProps = {
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  defaultValue?: Date | string | null;
  before?: Date;
  after?: Date;
};

const BDDatePicker = ({
  name,
  required,
  label,
  className,
  placeholder,
  defaultValue,
  before,
  after,
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
      const parsedDate =
        typeof defaultValue === "string"
          ? new Date(defaultValue)
          : defaultValue;
      setDate(parsedDate);
    }
  }, [defaultValue]);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={
        defaultValue
          ? format(
              typeof defaultValue === "string"
                ? new Date(defaultValue)
                : defaultValue,
              "yyyy-MM-dd",
            )
          : ""
      }
      render={({ field }) => (
        <div>
          {label && (
            <Label htmlFor={name} className="text-sm text-gray-700">
              {label}
            </Label>
          )}
          <Popover {...field}>
            <PopoverTrigger asChild className={`h-12 ${className}`}>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>{placeholder}</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                id={name}
                mode="single"
                required={required}
                selected={date || undefined}
                onSelect={(selectedDate) => {
                  if (selectedDate) {
                    setDate(selectedDate);
                    field.onChange(format(selectedDate, "yyyy-MM-dd"));
                  }
                }}
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);

                  const beforeDate = before ? new Date(before) : null;
                  const afterDate = after ? new Date(after) : null;

                  if (beforeDate) beforeDate.setHours(0, 0, 0, 0);
                  if (afterDate) afterDate.setHours(0, 0, 0, 0);

                  if (date.getTime() === today.getTime()) return false;

                  if (beforeDate && date > beforeDate) return true;
                  if (afterDate && date < afterDate) return true;

                  return false;
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      )}
    />
  );
};

export default BDDatePicker;
