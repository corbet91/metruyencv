"use client"
import FormLogin from '@/components/layout/menu-form/form-login';
import FormRegister from '@/components/layout/menu-form/form-register';
import { useState } from 'react';

export default function Support() {
    const [isOpenFormRegister, setIsOpenFormRegister] = useState(false);
    const [isOpenFormLogin, setIsOpenFormLogin] = useState(false);

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
            <div className='text-amber font-semibold italic flex justify-center mt-6'>Vui lòng đăng nhập để xem</div>
            <FormRegister
                isOpen={isOpenFormRegister}
                onClose={handleCloseFormRegister}
                onLogin={handleOpenFormLogin}
            />
            <FormLogin isOpen={isOpenFormLogin} onClose={handleCloseFormLogin} onSignup={handleOpenFormRegister} />
        </div>
    )
}