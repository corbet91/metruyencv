"use client";
import { SupportDialog } from "@/components/custome-ui/dialog";
import { AmberRadio } from "@/components/custome-ui/radio";
import React, { useState } from "react";
import { REPORT_TYPE } from "./constant";
import { useForm } from "react-hook-form";
import InputController from "@/components/custome-ui/input/input";
import { TextAreaAmber } from "@/components/custome-ui/textarea";
import { AmberButton } from "@/components/custome-ui/button";

const Support = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  return (
    <div>
      <div className="flex justify-between items-center lg:px-0 bg-light-gray h-12 relative">
        <div
          className="bg-amber px-4 py-2 h-full font-medium uppercase text-white text-xs flex items-center cursor-pointer"
          onClick={onOpen}
        >
          tạo yêu cầu mới
        </div>
        <SupportDialog isOpen={isOpen} onClose={onClose}>
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <span className="font-normal">
                Bạn cần hỗ trợ hay báo cáo vấn đề gì?
              </span>
              <AmberRadio data={REPORT_TYPE} control={control} name="report" />
            </div>
            <InputController
              control={control}
              name="title"
              title="Tiêu đề"
              placeholder="Tiêu đề"
              className="rounded-xl"
            />
            <TextAreaAmber
              control={control}
              name="content"
              placeholder=""
              title="Nội dung"
            />
            <AmberButton
              type="submit"
              childreen={
                <span className="text-white text-xl">Gửi yêu cầu</span>
              }
            />
            <div className="text-muted italic text-center">
              Các vấn đề vi phạm bản quyền xin vui lòng gửi thư đến
              contact@truyen.onl
            </div>
          </form>
        </SupportDialog>
      </div>
    </div>
  );
};

export default Support;
