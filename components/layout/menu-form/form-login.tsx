import { PrimaryButton } from "@/components/custome-ui/button";
import InputController from "@/components/custome-ui/input/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react"
import { useToast } from "@/hooks/use-toast";

interface IFormLogin {
  isOpen: boolean;
  onClose: () => void;
}

interface IFormInput {
  email: string;
  password: string;
}

const FormLogin: React.FC<IFormLogin> = ({ isOpen, onClose }) => {
  const { toast } = useToast()
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = async (data:IFormInput) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if(res?.status === 200) {
      reset()
      toast({
        variant: "success",
        title: "Thành công",
      })
      onClose()
    }
   
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="bg-light-beige p-6 max-w-xs sm:max-w-sm md:max-w-md w-full rounded-xl m-auto">
      <DialogHeader>
        <DialogTitle className="text-center">Đăng Nhập</DialogTitle>
        <DialogDescription className="flex flex-col gap-6">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
            <div className="flex flex-col gap-3">
              <PrimaryButton title="Đăng nhập" type="submit" />
              <span className="m-auto">
                Chưa có tài khoản? <span className="text-amber">Đăng ký ngay</span>
              </span>
            </div>
          </form>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  );
};

export default FormLogin;
