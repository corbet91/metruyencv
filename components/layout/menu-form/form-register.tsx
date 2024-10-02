import { register } from "@/actions/register";
import { PrimaryButton } from "@/components/custome-ui/button";
import InputController from "@/components/custome-ui/input/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";

interface IFormRegister {
  title: string;
}

interface IFormInput {
    email: string;
    password: string;
  }

const FormRegister: React.FC<IFormRegister> = ({ title }) => {

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm<IFormInput>();
    
      const onSubmit = async (data:IFormInput) => {
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email : data.email, password : data.password }),
        });
  
       
      }

  return (
    <Dialog>
      <DialogTrigger>{title}</DialogTrigger>
      <DialogContent className="bg-light-beige p-6 max-w-xs sm:max-w-sm md:max-w-md w-full rounded-xl m-auto">
        <DialogHeader>
          <DialogTitle className="text-center">Đăng Nhập</DialogTitle>
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
              />
              <div className="flex flex-col gap-3">
                <PrimaryButton title="Đăng nhập" type="submit" />
                <span className="m-auto">
                  Chưa có tài khoản?{" "}
                  <span className="text-amber">Đăng ký ngay</span>
                </span>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FormRegister;
