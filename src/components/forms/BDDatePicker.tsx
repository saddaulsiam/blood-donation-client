import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

type TInputProps = {
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

const DatePicker = ({
  name,
  type = "date",
  required,
  placeholder,
  className,
}: TInputProps) => {
  const { control } = useFormContext();
  const [date, setDate] = useState<Date>();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <Popover {...field}>
          <PopoverTrigger asChild className={className}>
            <Button
              variant={"outline"}
              className={cn(
                "m-0 h-14 w-full justify-start text-left font-normal",
                !date && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>{placeholder}</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => {
                setDate(selectedDate); // Update local state
                field.onChange(selectedDate?.toISOString()); // Sync with react-hook-form
              }}
            />
          </PopoverContent>
        </Popover>
      )}
    />
  );
};

export default DatePicker;
