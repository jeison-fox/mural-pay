export interface ICustomerContext {
  customerId: string | null;
  updateCustomerId: (id: string) => void;
}
