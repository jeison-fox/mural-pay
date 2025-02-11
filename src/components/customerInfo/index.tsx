import { Skeleton } from "@radix-ui/themes";
import CreateTransferRequest from "components/createTransferRequest";
import CustomerDetailsCard from "components/customerInfo/CustomerDetailsCard";
import ErrorMessage from "components/ErrorMessage";
import type { ICustomerInfoProps } from "customTypes/components/customerInfo";

const CustomerInfo: React.FC<ICustomerInfoProps> = ({
  customer,
  error,
  loading,
}) => {
  if (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An error occurred while fetching the customer details";

    return <ErrorMessage error={errorMessage} />;
  }

  if (loading) {
    return <Skeleton width="100%" height="100px" />;
  }

  return (
    <CustomerDetailsCard
      customer={customer}
      headerAddOn={<CreateTransferRequest customer={customer} />}
    />
  );
};

export default CustomerInfo;
