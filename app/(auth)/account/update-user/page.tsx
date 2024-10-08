import { UpgradeUserCard } from '@/components/custome-ui/card'
import React from 'react'

const UpdateUser = () => {
    return (
        <div className='py-20'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8 flex'>
                <div className='mx-auto max-w-4xl text-center'>
                    <p className='mt-2 text-4xl font-bold tracking-tight sm:text-5xl'>Nâng cấp tài khoản</p>
                    <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8'>Chi phí nhỏ, lợi ích lớn. Nâng cấp ngay hôm nay để trải nghiệm những đặc quyền trên web.</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center mt-16'>
                <UpgradeUserCard>
                    <span>1212</span>
                </UpgradeUserCard>
            </div>
        </div>
    )
}

export default UpdateUser
