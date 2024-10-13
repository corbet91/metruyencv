import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Control, Controller } from "react-hook-form";

interface IData {
  value: string;
  label: string;
}

interface IRadio {
  control: Control<any>;
  name: string;
  data: IData[];
}

export const AmberRadio: React.FC<IRadio> = ({ control, name, data }) => {
  return (
    <Controller
      control={control}
      rules={{
        maxLength: 100,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <RadioGroup
          onValueChange={onChange}
          defaultValue={value}
          className="flex flex-col space-y-1"
        >
          {data.map((item, index) => {
            return (
              <div className="flex items-center gap-3" key={index}>
                <RadioGroupItem
                  value={item.value}
                  id={item.value}
                  className="bg-white checked:bg-amber checked:text-white text-amber border-gray-300 h-4 w-4"
                />
                <Label
                  htmlFor={item.value}
                  className="leading-6 text-sm font-normal"
                >
                  {item.label}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      )}
      name={name}
    />
  );
};
