import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IFormAuth {
  image: string;
  name: string;
}

const FormAuth = ({image,name} : IFormAuth) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between items-center">
        <Avatar className="flex flex-row justify-between items-center space-x-2">
          <AvatarImage src={image ? image : "https://github.com/shadcn.png"} className="w-6 h-6 rounded-xl" />
          <AvatarFallback>{name ?? "Corbet"}</AvatarFallback>
        </Avatar>
        <div className="font-semibold text-title">{name}</div>
      </div>
    </div>
  );
};
export default FormAuth;
