import { IUser } from "@/types/user";
import apiClient from "../api";

export const handleRegisterUser = async ({ email, password }: IUser) => {
    try {
        const response = await apiClient.post('/api/auth/signup', {
            email : email,
            password : password
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};