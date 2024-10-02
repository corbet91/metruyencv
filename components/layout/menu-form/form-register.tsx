import { PrimaryButton } from "@/components/custome-ui/button";
import InputController from "@/components/custome-ui/input/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

import { handleRegisterUser } from "@/services/auth/register";
import { useForm } from "react-hook-form";


interface IFormRegister {
  isOpen: boolean;
  onClose: () => void;
}

interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string
}

const FormRegister: React.FC<IFormRegister> = ({ isOpen, onClose }) => {
  const { toast } = useToast()
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const password = watch('password')
  const confirmPassword = watch('confirmPassword')

  const onSubmit = async (data: IFormInput) => {

    if (password !== confirmPassword) {
      return toast({
        variant: "destructive",
        title: "Lỗi",
        description: "Mật khẩu không khớp",
      })
    }

    const res = await handleRegisterUser(data)

    
  }
  console.log("errors",errors)
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-light-beige p-6 max-w-xs sm:max-w-sm md:max-w-md w-full rounded-xl m-auto">
        <DialogHeader>
          <DialogTitle className="text-center">Đăng ký</DialogTitle>
          <DialogDescription className="flex flex-col gap-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <InputController
                control={control}
                name="Email"
                placeholder="email"
                title="email"
                className="h-10 rounded-xl"
              />
              <InputController
                control={control}
                name="password"
                placeholder="password"
                title="Mật khẩu"
                className="h-10 rounded-xl"
                type="password"
              />
              <InputController
                control={control}
                name="confirmPassword"
                placeholder="password"
                title="Nhập lại mật khẩu"
                className="h-10 rounded-xl"
                type="password"
              />
              <div className="flex flex-col gap-3">
                <PrimaryButton title="Đăng ký" type="submit" />
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FormRegister;
