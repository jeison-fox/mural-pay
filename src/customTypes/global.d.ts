declare global {
  type TCurrency = "USD" | "COP" | "ARS" | "EUR" | "MXN" | "BRL" | "CLP" | "PEN" | "BOB" | "CRC" | "ZAR";

  type TBlockchain = "ETHEREUM" | "POLYGON" | "BASE" | "CELO";

  type TOrganizationType = "BUSINESS" | "INDIVIDUAL";

  type TRecipientTransferType = "FIAT" | "BLOCKCHAIN";

  interface ICustomer {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    customerType: TOrganizationType;
    status: "INACTIVE" | "PENDING" | "COMPLETE" | "ERROR" | "REJECTED";
    accountId?: string;
    account?: IAccount;
  }

  interface IAccount {
    id: string;
    createdAt: string;
    name: string;
    address: string;
    blockchain: TBlockchain;
    balance: {
      balance: number;
      tokenSymbol: string;
    };
    depositAccount: IDepositAccount;
  }

  interface IDepositAccount {
    id: string;
    accountId: string;
    status: "ACTIVATED" | "DEACTIVATED";
    currency: TCurrency;
    bankBeneficiaryName: string;
    bankBeneficiaryAddress: string;
    bankName: string;
    bankAddress: string;
    bankRoutingNumber: string;
    bankAccountNumber: string;
  }

  interface ITransferRequestRecipient {
    id: string;
    createdAt: string;
    updatedAt: string;
    recipientTransferType: TRecipientTransferType;
    tokenAmount: number;
    fiatDetails: {
      withdrawalRequestStatus:
        | "AWAITING_SOURCE_DEPOSIT"
        | "PENDING"
        | "COMPLETED"
        | "FAILED"
        | "CANCELED";
      currencyCode: TCurrency;
      fiatAmount: number;
      transactionFee: number;
    };
    blockchainDetails: {
      walletAddress: string;
      blockchain: TBlockchain;
    };
  }

  interface ITransferRequest {
    id: string;
    createdAt: string;
    updatedAt: string;
    payoutAccountId: string;
    transactionHash: string;
    memo: string;
    status: "IN_REVIEW" | "CANCELLED" | "PENDING" | "EXECUTED" | "FAILED";
    recipientsInfo: ITransferRequestRecipient[];
  }
}

export {};
