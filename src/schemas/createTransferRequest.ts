import { z } from "zod";

const createTransferRequestSchema = z.object({
  name: z.string().nonempty("Name is required"),
  tokenAmount: z.number().int().positive("Token amount must be a positive number"),
  bankName: z.string().nonempty("Bank name is required"),
  accountType: z.enum(["SAVINGS", "CHECKING"]),
  bankAccountNumber: z.string().nonempty("Bank account number is required"),
  walletAddress: z.string().nonempty("Wallet address is required"),
});

export default createTransferRequestSchema;
