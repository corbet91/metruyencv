import apiClient from "../api";

export const getDetailUser = async (id: string) => {
    try {
        const response = await apiClient.get(`/api/user/${id}`);
        return response
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}