import { UpgradeUserCard } from '@/components/custome-ui/card'
import Image from 'next/image'
import React from 'react'
import potato from '../../../../public/images/potato.png'
import AmberSuccess from '@/assets/icons/AmberSuccess'
import Key from '@/assets/icons/Key'

const UpdateUser = () => {
    return (
        <div className='py-20'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8 flex'>
                <div className='mx-auto max-w-4xl text-center'>
                    <p className='mt-2 text-4xl font-bold tracking-tight sm:text-5xl'>Nâng cấp tài khoản</p>
                    <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8'>Chi phí nhỏ, lợi ích lớn. Nâng cấp ngay hôm nay để trải nghiệm những đặc quyền trên web.</p>
                </div>
            </div>
            <div className='isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                <UpgradeUserCard className='p-8 ring-1 ring-gray-200 dark:ring-white/10 xl:p-10 lg:mt-8'>
                    <h3 className='text-lg font-semibold leading-8'>Phú Hào</h3>
                    <p className='mt-6 flex items-baseline gap-x-1'>
                        <Image src={potato} alt='potato' className='w-7 h-7' />
                        <span className='text-4xl font-bold tracking-tight'>1100</span>
                        <span className='text-sm font-semibold leading-6 text-muted'>/ngày</span>
                    </p>
                    <ul className='mt-8 space-y-3 text-sm leading-6'>
                        <li className='flex gap-x-3'>
                            <AmberSuccess className='text-amber' />
                            Không quảng cáo
                        </li>
                        <li className='flex'>
                            <AmberSuccess className='text-amber mr-2' />
                            Nghe truyện hàng ngày: <span className='font-semibold ms-1'>10 tiếng*</span>
                        </li>
                        <li className='flex'>
                            <AmberSuccess className='text-amber mr-2' />
                            Tải truyện hàng ngày: <span className='font-semibold ms-1'>1000 chương*</span>
                        </li>
                    </ul>
                </UpgradeUserCard>
                <UpgradeUserCard className='p-8 ring-1 ring-gray-200 dark:ring-white/10 xl:p-10 lg:z-10'>
                    <h3 className='text-lg font-semibold leading-8'>Phú Hào</h3>
                    <p className='mt-6 flex items-baseline gap-x-1'>
                        <Image src={potato} alt='potato' className='w-7 h-7' />
                        <span className='text-4xl font-bold tracking-tight'>1100</span>
                        <span className='text-sm font-semibold leading-6 text-muted'>/ngày</span>
                    </p>
                    <ul className='mt-8 space-y-3 text-sm leading-6'>
                        <li className='flex gap-x-3'>
                            <AmberSuccess className='text-amber' />
                            Không quảng cáo
                        </li>
                        <li className='flex'>
                            <AmberSuccess className='text-amber mr-2' />
                            Nghe truyện hàng ngày: <span className='font-semibold ms-1'>10 tiếng*</span>
                        </li>
                        <li className='flex'>
                            <AmberSuccess className='text-amber mr-2' />
                            Tải truyện hàng ngày: <span className='font-semibold ms-1'>1000 chương*</span>
                        </li>
                    </ul>
                </UpgradeUserCard>
                <UpgradeUserCard className='p-8 ring-1 ring-gray-200 dark:ring-white/10 xl:p-10 lg:mt-8'>
                    <h3 className='text-lg font-semibold leading-8'>Phú Hào</h3>
                    <p className='mt-6 flex items-baseline gap-x-1'>
                        <Image src={potato} alt='potato' className='w-7 h-7' />
                        <span className='text-4xl font-bold tracking-tight'>1100</span>
                        <span className='text-sm font-semibold leading-6 text-muted'>/ngày</span>
                    </p>
                    <ul className='mt-8 space-y-3 text-sm leading-6'>
                        <li className='flex gap-x-3'>
                            <AmberSuccess className='text-amber' />
                            Không quảng cáo
                        </li>
                        <li className='flex'>
                            <AmberSuccess className='text-amber mr-2' />
                            Nghe truyện hàng ngày: <span className='font-semibold ms-1'>10 tiếng*</span>
                        </li>
                        <li className='flex'>
                            <AmberSuccess className='text-amber mr-2' />
                            Tải truyện hàng ngày: <span className='font-semibold ms-1'>1000 chương*</span>
                        </li>
                    </ul>
                </UpgradeUserCard>
            </div>
            <div className='mt-12 italic space-y-2'>
                <div>*: Nghe audio và tải truyện trên app.</div>
                <div>**: Tối đa một người có thể có  <span className='font-bold'>300 <Key className='text-amber inline-flex' /></span>
                    , nếu gần đạt tới mức giới hạn này, hãy sử dụng bớt đi <Key className='text-amber inline-flex' /> để hệ thống có thể cộng thêm cho bạn. <Key className='text-amber inline-flex' /> sẽ được cộng tự động vào 12h đêm hàng ngày.
                </div>
            </div>
        </div>
    )
}

export default UpdateUser
