import { z } from "zod";

const createCustomerSchema = z.object({
  name: z.string().min(3, "Customer name must be at least 3 characters"),
  organizationType: z.enum(["BUSINESS", "INDIVIDUAL"]),
});

export default createCustomerSchema;
