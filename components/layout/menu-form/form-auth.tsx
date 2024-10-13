import { AmberOutLineButton } from "@/components/custome-ui/button";
import { BlackChip, ChipNotification } from "@/components/custome-ui/chip";
import Divider from "@/components/custome-ui/divider/divider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import newImage from "../../../public/images/new.png";
import { signOut } from "next-auth/react";
import potato from "../../../public/images/potato.png";
import candy from "../../../public/images/candy.png";
import Key from "@/assets/icons/Key";
import Vote from "@/assets/icons/Vote";
import TooltipUi from "@/components/custome-ui/tooltip";
import { useRouter } from "next/navigation";
import { Children } from "react";
import Link from "next/link";

interface IFormAuth {
  image: string;
  name: string;
}

const DATA_FORM_AUTH = [
  {
    Children: (
      <div className="flex flex-row gap-2 items-center cursor-pointer">
        <BlackChip /> Nâng cấp tài khoản
        <Image src={newImage} alt="new" className="w-5 h-5" />{" "}
      </div>
    ),
    route: "/account/update-user",
  },
  {
    Children: (
      <div className="flex flex-row gap-2 items-center cursor-pointer">
        <BlackChip /> Tủ truyện của tôi
      </div>
    ),
    route: "/account/stories",
  },
  {
    Children: (
      <div className="flex flex-row gap-2 items-center cursor-pointer">
        <BlackChip /> Lịch sử giao dịch
      </div>
    ),
    route: "/account/history",
  },
  {
    Children: (
      <div className="flex flex-row gap-2 items-center cursor-pointer">
        <BlackChip /> Cài đặt cá nhân
      </div>
    ),
    route: "/account/settings",
  },
  {
    Children: (
      <div className="flex flex-row gap-2 items-center cursor-pointer">
        <BlackChip /> Yêu cầu hổ trợ
      </div>
    ),
    route: "/account/support",
  },
];

const FormAuth = ({ image, name }: IFormAuth) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between items-center h-6">
        <div className="flex flex-row  items-center gap-2">
          <Avatar className="flex flex-row justify-center items-center w-6 h-6">
            <AvatarImage
              src={image ? image : "https://github.com/shadcn.png"}
              className="rounded-xl"
            />
            <AvatarFallback>{name ?? "Corbet"}</AvatarFallback>
          </Avatar>
          <h2 className="font-semibold text-title text-slate-gray cursor-pointer hover:text-amber">
            {name}
          </h2>
          <ChipNotification total={0} />
        </div>
        <AmberOutLineButton
          onClick={() => signOut()}
          childreen={<span>Thoát</span>}
        />
      </div>
      <div className="mx-10 flex flex-col gap-2">
        {DATA_FORM_AUTH.map((item, index) => {
          return (
            <Link key={index} href={item.route}>
              {item.Children}
              <Divider />
            </Link>
          );
        })}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <TooltipUi
              childreen={
                <Image src={potato} alt="potato" className="w-5 h-5" />
              }
              content="Khoai: dùng để mở khóa chương, tặng quà, nâng cấp tài khoản"
            />
            <span>0</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <span>0</span>
            <TooltipUi
              childreen={<Key className="text-amber" />}
              content="CHÌA KHÓA: dùng để mở khóa chương"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <TooltipUi
              childreen={<Image src={candy} alt="candy" className="w-5 h-5" />}
              content=" KẸO: tiền tệ sử dụng ở phiên bản cũ, có thể đổi sang KHOAI để dùng ở phiên bản mới "
            />
            <span>0</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <span>0</span>
            <TooltipUi
              childreen={<Vote className="text-amber" />}
              content=" PHIẾU: dùng để đề cử cho truyện "
            />
          </div>
        </div>
        <AmberOutLineButton
          childreen={
            <div className="flex flex-row justify-center items-center gap-2">
              <span className="font-bold text-xl text-amber">Nạp</span>
              <Image src={potato} alt="potato-big" className="w-8 h-8" />
            </div>
          }
          className="h-12"
        />
      </div>
    </div>
  );
};
export default FormAuth;
