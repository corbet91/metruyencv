import { IUser } from "@/types/user";
import apiClient from "../api";

export const handleRegisterUser = async (data: IUser) => {
    try {
        const response = await apiClient.post('/api/auth/signup', {
            email : data.email,
            password : data.password
        });
     return response
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
