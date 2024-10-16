"use client";
import OutlineEvaluate from "@/assets/icons/OutlineEvaluate";
import OutlinePen from "@/assets/icons/OutlinePen";
import OutlineRank from "@/assets/icons/OutlineRank";
import OutlineRealTime from "@/assets/icons/OutlineRealTime";
import OutlineStore from "@/assets/icons/OutlineStore";
import { BlackChip } from "@/components/custome-ui/chip";
import { getDetailUser } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Divider from "../../custome-ui/divider/divider";
import FormAuth from "./form-auth";
import FormLogin from "./form-login";
import FormRegister from "./form-register";
import { useRouter } from "next/navigation";

const MenuForm = () => {
  const { data: auth, status } = useSession();
  const router = useRouter()
  const [isOpenFormRegister, setIsOpenFormRegister] = useState(false);
  const [isOpenFormLogin, setIsOpenFormLogin] = useState(false);
  const { data: userData } = useQuery({
    queryKey: [`user_${auth?.user?._id}`, auth?.user?._id],
    queryFn: () => getDetailUser(auth?.user?._id as string),
    staleTime: 0,
    gcTime: 0,
    open: !!Boolean(auth?.user?._id),
  });

  const handleOpenFormRegister = () => {
    setIsOpenFormRegister(true);
  };

  const handleCloseFormRegister = () => {
    setIsOpenFormRegister(false);
  };

  const handleOpenFormLogin = () => {
    setIsOpenFormLogin(true);
  };

  const handleCloseFormLogin = () => {
    setIsOpenFormLogin(false);
  };

  return (
    <div>
      <div className="flex flex-col  py-4  gap-4">
        {!auth?.user?._id ? (
          <div className="flex flex-col gap-4">
            <div
              className="font-semibold cursor-pointer"
              onClick={handleOpenFormLogin}
            >
              Đăng nhập
            </div>
            <div
              className="font-semibold cursor-pointer"
              onClick={handleOpenFormRegister}
            >
              Đăng ký tài khoản{" "}
            </div>
            <Divider />
          </div>
        ) : (
          <FormAuth
            name={userData?.data?.name ?? "Corbet"}
            image={userData?.data?.image}
          />
        )}
        <div className="flex flex-row gap-2 font-semibold">
          <OutlinePen /> Đăng truyện
        </div>
        <div className="flex flex-row gap-2 font-semibold">
          <OutlineStore /> Kho truyện
        </div>
        <ul className="mx-10 flex flex-col gap-2">
          <li className="flex flex-row gap-2 items-center">
            <BlackChip />Truyện mới
          </li>
          <Divider />
          <li className="flex flex-row gap-2 items-center">
            <BlackChip />Truyện full
          </li>
        </ul>
        <div className="flex flex-row gap-2 font-semibold">
          <OutlineRank /> Xếp hạng
        </div>
        <ul className="mx-10 flex flex-col gap-2">
          <li className="flex flex-row gap-2 items-center">
            <BlackChip />Xếp hạng
            lượt đọc
          </li>
          <Divider />
          <li className="flex flex-row gap-2 items-center">
            <BlackChip />Xếp hạng đề
            cử
          </li>
          <Divider />
          <li className="flex flex-row gap-2 items-center">
            <BlackChip />Xếp hạng
            tặng thưởng
          </li>
          <Divider />
          <li className="flex flex-row gap-2 items-center">
            <BlackChip />Xếp hạng
            bình luận
          </li>
        </ul>
        <div className="flex flex-row gap-2 font-semibold">
          <OutlineRealTime /> Thời gian thực
        </div>
        <div className="flex flex-row gap-2 font-semibold">
          <OutlineEvaluate /> Đánh giá mới
        </div>
      </div>
      <FormRegister
        isOpen={isOpenFormRegister}
        onClose={handleCloseFormRegister}
        onLogin={handleOpenFormLogin}
      />
      <FormLogin isOpen={isOpenFormLogin} onClose={handleCloseFormLogin} onSignup={handleOpenFormRegister} />
    </div>
  );
};

export default MenuForm;
