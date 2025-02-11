export interface ICustomerInfoProps {
  customer: ICustomer;
  error: Error | null;
  loading: boolean;
}

export interface ICustomerDetailsCardProps {
  customer: ICustomer;
  headerAddOn?: React.ReactNode;
}
