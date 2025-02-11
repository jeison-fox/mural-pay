import type {
  ICreateTransferRequestData,
  TCreateTransferRequestFormValues,
} from "customTypes/components/createTransferRequest";
import type { TGroupedTransferRequests } from "customTypes/components/transferRequest";

/**
 * Generates an augmented transfer request data object by combining form values with customer account details.
 *
 * @param {TCreateTransferRequestFormValues} data - The form values necessary for creating a transfer request.
 * @param {ICustomer} customer - The customer object containing the account ID used as the payout account.
 * @returns {ICreateTransferRequestData} - An object conforming to ICreateTransferRequestData.
 */
export const getAugmentedTransferRequestData = (
  data: TCreateTransferRequestFormValues,
  customer: ICustomer
): ICreateTransferRequestData => {
  return {
    payoutAccountId: customer.accountId,
    recipientsInfo: [
      {
        name: data.name,
        tokenAmount: data.tokenAmount,
        email: "fakeemail@gmail.com",
        recipientType: "INDIVIDUAL",
        recipientTransferType: "FIAT",
        dateOfBirth: "2000-01-01",
        bankDetails: {
          bankName: data.bankName,
          bankAccountOwnerName: data.name,
          accountType: data.accountType,
          bankAccountNumber: data.bankAccountNumber,
          documentNumber: "123456789",
          documentType: "NATIONAL_ID",
          currencyCode: "COP",
          physicalAddress: {
            address1: "Fake Street 123",
            country: "CO",
            state: "CUN",
            city: "Bogota",
            zip: "110111",
          },
        },
        walletDetails: {
          walletAddress: data.walletAddress,
          blockchain: customer.account?.blockchain,
        },
      },
    ],
  };
};

/**
 * Groups transfer requests by their status.
 *
 * This function processes an array of transfer requests and categorizes each request based on its status.
 * If the provided array is undefined, an object containing empty arrays for each group is returned.
 *
 * @param {ITransferRequest[] | undefined} requests - An array of ITransferRequest objects to be grouped, or undefined.
 * @returns {TGroupedTransferRequests} - An object of type TGroupedTransferRequests containing arrays of transfer requests grouped by status.
 */
export const getGroupedTransferRequests = (
  requests: ITransferRequest[] | undefined
): TGroupedTransferRequests => {
  if (requests) {
    return requests.reduce<TGroupedTransferRequests>(
      (acc, request: ITransferRequest) => {
        if (request.status === "IN_REVIEW") {
          acc.inReview.push(request);
        } else if (request.status === "PENDING") {
          acc.pending.push(request);
        } else if (request.status === "EXECUTED") {
          acc.executed.push(request);
        } else {
          acc.canceled.push(request);
        }
        return acc;
      },
      { inReview: [], pending: [], executed: [], canceled: [] }
    );
  }

  return { inReview: [], pending: [], executed: [], canceled: [] };
};
