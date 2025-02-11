import axios from "axios";
import axiosInstance from "api/axiosInstance";
import type { ICreateTransferRequestData } from "customTypes/components/createTransferRequest";
import type { ITranferRequestsResponse } from "customTypes/transferRequest";

export const createTransferRequest = async (
  data: ICreateTransferRequestData
): Promise<ITransferRequest> => {
  try {
    const response = await axiosInstance.post("/transfer-requests", data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    } else {
      throw new Error("An error occurred while creating the transfer request");
    }
  }
};

export const executeTransferRequest = async (
  transferRequestId: string
): Promise<ITranferRequestsResponse> => {
  try {
    const response = await axiosInstance.post(
      "/transfer-requests/execute",
      {
        transferRequestId,
      },
      {
        headers: {
          "mural-account-api-key": process.env.REACT_APP_TRANSFER_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    } else {
      throw new Error("An error occurred while executing the transfer request");
    }
  }
};

export const getTransferRequests =
  async (): Promise<ITranferRequestsResponse> => {
    try {
      const response = await axiosInstance.get("/transfer-requests");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || error.message);
      } else {
        throw new Error("An error occurred while fetching transfer requests");
      }
    }
  };
