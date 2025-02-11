import { z } from "zod";
import { createTransferRequestSchema } from "schemas/createTransferRequest";

export type TCreateTransferRequestFormValues = z.infer<
  typeof createTransferRequestSchema
>;

type TAccountType = "SAVINGS" | "CHECKING";

export interface IRecipientsInfo {
  name: string;
  tokenAmount: number;
  email: string;
  recipientType: TOrganizationType;
  recipientTransferType: TRecipientTransferType;
  dateOfBirth: string;
  bankDetails: {
    bankName: string;
    bankAccountOwnerName: string;
    accountType: TAccountType;
    bankAccountNumber: string;
    documentNumber: string;
    documentType: "NATIONAL_ID" | "PASSPORT" | "RESIDENT_ID" | "RUC";
    currencyCode: TCurrency;
    physicalAddress: {
      address1: string;
      country: string;
      state: string;
      city: string;
      zip: string;
    };
  };
  walletDetails: {
    walletAddress: string;
    blockchain: TBlockchain | undefined;
  };
}

export interface ICreateTransferRequestData extends TCreateTransferRequestFormValues {
  payoutAccountId: string | undefined;
  recipientsInfo: IRecipientsInfo[];
}

export interface ICreateTransferRequestProps {
  customer: ICustomer;
}

export interface ICreateTransferRequestFieldsProps {
  control: Control<TCreateTransferRequestFormValues>;
  errors: FieldErrors<{
    name: string;
    tokenAmount: number;
    bankName: string;
    accountType: TAccountType;
    bankAccountNumber: string;
    walletAddress: string;
    blockchain: TBlockchain;
  }>;
}
