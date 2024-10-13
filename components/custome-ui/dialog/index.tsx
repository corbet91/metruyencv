import Close from "@/assets/icons/Close";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import logo from "@/public/images/logo.png";
import Image from "next/image";

interface IDialog {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export const SupportDialog: React.FC<IDialog> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-light-gray p-6 max-w-xs sm:max-w-sm md:max-w-md w-full rounded-xl">
        <DialogHeader className="flex  items-center justify-between flex-row">
          <Image src={logo} alt="logo" className="h-8 w-8" />
          <span className="font-bold text-xl">Yêu cầu & Báo lỗi</span>
          <Close className="cursor-pointer" onClick={onClose} />
        </DialogHeader>
        <DialogDescription>{children}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
