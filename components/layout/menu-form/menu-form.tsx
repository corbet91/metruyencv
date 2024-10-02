'use client'
import React, { useState } from 'react'
import Divider from '../../custome-ui/divider/divider'
import OutlinePen from '@/assets/icons/OutlinePen'
import OutlineStore from '@/assets/icons/OutlineStore'
import OutlineRank from '@/assets/icons/OutlineRank'
import OutlineRealTime from '@/assets/icons/OutlineRealTime'
import OutlineEvaluate from '@/assets/icons/OutlineEvaluate'
import FormLogin from './form-login'
import FormRegister from './form-register'

const MenuForm = () => {
  const [isOpenFormRegister,setIsOpenFormRegister] = useState(false)

  const handleOpenFormRegister = () => {
    setIsOpenFormRegister(true);
  };

  const handleCloseFormRegister = () => {
    setIsOpenFormRegister(false);
  };


  return (
    <div>
        <div className='flex flex-col  py-4  gap-4'>
            <div className='font-semibold'><FormLogin title ={'Đăng nhập'} /></div>
            <div className='font-semibold cursor-pointer' onClick={handleOpenFormRegister}>Đăng ký tài khoản </div>
            <Divider />
            <div className='flex flex-row gap-2 font-semibold'><OutlinePen /> Đăng truyện</div>
            <div className='flex flex-row gap-2 font-semibold'><OutlineStore/> Kho truyện</div>
            <ul className='mx-10 flex flex-col gap-2'>
            <li className='flex flex-row gap-2 items-center'><span className='rounded-full w-1 h-1 bg-black '></span >Truyện mới</li>
              <Divider />
              <li className='flex flex-row gap-2 items-center'><span className='rounded-full w-1 h-1 bg-black '></span >Truyện full</li>
            </ul>
            <div className='flex flex-row gap-2 font-semibold'>
               < OutlineRank /> Xếp hạng
            </div>
            <ul className='mx-10 flex flex-col gap-2'>
            <li className='flex flex-row gap-2 items-center'><span className='rounded-full w-1 h-1 bg-black '></span >Xếp hạng lượt đọc</li>
            <Divider />
            <li className='flex flex-row gap-2 items-center'><span className='rounded-full w-1 h-1 bg-black '></span >Xếp hạng đề cử</li>
            <Divider />
            <li className='flex flex-row gap-2 items-center'><span className='rounded-full w-1 h-1 bg-black '></span >Xếp hạng tặng thưởng</li>
            <Divider />
            <li className='flex flex-row gap-2 items-center'><span className='rounded-full w-1 h-1 bg-black '></span >Xếp hạng bình luận</li>
            </ul>
            <div className='flex flex-row gap-2 font-semibold'>
               < OutlineRealTime /> Thời gian thực
            </div>
            <div className='flex flex-row gap-2 font-semibold'>
               < OutlineEvaluate /> Đánh giá mới
            </div>
        </div>
        <FormRegister isOpen={isOpenFormRegister} onClose={handleCloseFormRegister}/>
    </div>
  )
}

export default MenuForm