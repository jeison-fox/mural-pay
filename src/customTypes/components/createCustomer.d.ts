import { z } from "zod";
import type { Control, FieldErrors } from "react-hook-form";
import createCustomerSchema from "schemas/createCustomer";

export type TCreateCustomerFormValues = z.infer<typeof createCustomerSchema>;

export interface ICreateCustomerProps {
  onSuccess: (newCustomer: ICustomer) => void;
}

export interface ICreateCustomerFieldsProps {
  control: Control<TCreateCustomerFormValues>;
  errors: FieldErrors<{
    name: string;
    organizationType: TOrganizationType;
  }>;
}
