import { Textarea } from "@/components/ui/textarea";
import { Control, Controller } from "react-hook-form";

interface ITextArea {
  control: Control<any>;
  name: string;
  title: string;
  placeholder: string;
}

export const TextAreaAmber: React.FC<ITextArea> = ({
  control,
  name,
  title,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <span>{title}</span>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Textarea
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            className="rounded-xl border border-slate-300 shadow-sm focus:border-amber  text-sm p-2 "
          />
        )}
        name={name}
      />
    </div>
  );
};
