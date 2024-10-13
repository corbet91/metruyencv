import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectProps } from "@radix-ui/react-select";
import React from "react";
import { Control, Controller } from "react-hook-form";

interface IData {
  label: string;
  value: string;
}

interface ISelection extends SelectProps {
  control: Control<any>;
  placeholder: string;
  name: string;
  data: IData[];
  classNameTrigger?: string;
  classNameValue?: string;
  classNameContent?: string;
  classNameGroup?: string;
}

const selection: React.FC<ISelection> = ({
  control,
  placeholder,
  name,
  data,
  classNameTrigger,
  classNameValue,
  classNameContent,
  classNameGroup,
  ...props
}) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <Select {...props}>
          <SelectTrigger className={classNameTrigger}>
            <SelectValue placeholder={placeholder} className={classNameValue} />
          </SelectTrigger>
          <SelectContent className={classNameContent}>
            <SelectGroup className={classNameGroup}>
              {data.map((item, index) => {
                return (
                  <SelectItem value={value} key={index} onChange={onChange}>
                    {item.label}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
      name={name}
    />
  );
};

export default selection;
