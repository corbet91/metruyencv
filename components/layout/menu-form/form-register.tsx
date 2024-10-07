import { AmberButton } from "@/components/custome-ui/button";
import InputController from "@/components/custome-ui/input/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Image from "next/image";
import logo from "../../../public/images/logo.png";

import { handleRegisterUser } from "@/services/auth";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";

interface IFormRegister {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void
}

interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;

}

const FormRegister: React.FC<IFormRegister> = ({ isOpen, onClose,onLogin }) => {
  const { toast } = useToast();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = async (data: IFormInput) => {
    if (password !== confirmPassword) {
      return toast({
        variant: "destructive",
        title: "Lỗi",
        description: "Mật khẩu không khớp",
      });
    }
    const res = await handleRegisterUser(data);
    if (res?.status === 201) {
      onClose();
      toast({
        variant: "success",
        title: "Thành công",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="rounded-xl bg-light-beige p-6 max-w-xs sm:max-w-sm md:max-w-md w-full m-auto">
        <DialogHeader className="flex flex-row justify-between items-center ">
          <Image src={logo} alt="logo" className="w-10 h-10" />
          <DialogTitle className="text-center">Đăng Ký</DialogTitle>
          <DialogPrimitive.Close>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogHeader>
        <DialogDescription className="flex flex-col gap-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <InputController
              control={control}
              name="email"
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
              <AmberButton childreen={<span>Đăng ký</span>} type="submit" />
              <span className="m-auto">
                Đã có tài khoản? {" "}
                <span className="text-amber cursor-pointer" onClick = {() => {
                  onLogin()
                  onClose()
                }}>Đã có tài khoản?</span>
              </span>
            </div>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default FormRegister;
