import { ITicket } from "@/types/tickets";
import apiClient from "../api";

export const createNewTicket = async (body: ITicket) => {
  try {
    const response = await apiClient.post(`/api/ticket/create-ticket`, {
      userId: body.userId,
      title: body.title,
      report: body.report,
      content: body.content,
    });
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
