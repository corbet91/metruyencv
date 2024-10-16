import { AmberButton } from "@/components/custome-ui/button";
import InputController from "@/components/custome-ui/input/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../../public/images/logo.png";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'


interface IFormLogin {
  isOpen: boolean;
  onClose: () => void;
  onSignup: () => void
}

interface IFormInput {
  email: string;
  password: string;
}

const FormLogin: React.FC<IFormLogin> = ({ isOpen, onClose, onSignup }) => {
  const { data: auth, status } = useSession();
  const router = useRouter()
  const pathname = usePathname()
  const { toast } = useToast();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res?.status === 200) {
      if(pathname.startsWith('/support')){ 
        router.back()
      }
      reset();
      toast({
        variant: "success",
        title: "Thành công",
      });
      onClose();
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-light-beige p-6 max-w-xs sm:max-w-sm md:max-w-md w-full rounded-xl m-auto">
        <DialogHeader className="flex  items-center justify-between flex-row">
          <Image src={logo} alt="logo" className="w-10 h-10" />
          <DialogTitle className="text-center">Đăng Nhập</DialogTitle>
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
            <div className="flex flex-col gap-3">
              <AmberButton childreen={<span>Đăng nhập</span>} type="submit" />
              <span className="m-auto">
                Chưa có tài khoản?{" "}
                <span className="text-amber cursor-pointer" onClick={() => {
                  onSignup()
                  onClose()
                }}>Đăng ký ngay</span>
              </span>
            </div>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default FormLogin;
