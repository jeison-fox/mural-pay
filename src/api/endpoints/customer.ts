import axios from "axios";
import axiosInstance from "api/axiosInstance";
import type { TCreateCustomerFormValues } from "customTypes/components/createCustomer";

export const createCustomer = async (
  data: TCreateCustomerFormValues
): Promise<ICustomer> => {
  try {
    const response = await axiosInstance.post("/customers", data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    } else {
      throw new Error("An error occurred while creating the customer");
    }
  }
};

export const getCustomer = async (customerId: string): Promise<ICustomer> => {
  try {
    const response = await axiosInstance.get(`/customers/${customerId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    } else {
      throw new Error("An error occurred while fetching the customer details");
    }
  }
};
