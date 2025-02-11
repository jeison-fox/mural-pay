import { useCallback } from "react";
import { Container, Flex } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import CreateCustomer from "components/createCustomer";
import CustomerInfo from "components/customerInfo";
import TransferRequestList from "components/transferRequest";
import { useCustomer } from "contexts/CustomerContext";
import queryClient from "api/queryClient";
import { getCustomer } from "api/endpoints/customer";
import { getTransferRequests } from "api/endpoints/transferRequest";

const Main = () => {
  const { customerId, updateCustomerId } = useCustomer();

  const {
    data: customer,
    error: customerError,
    isPending: isCustomerPending,
  } = useQuery({
    queryKey: ["customer", customerId],
    queryFn: () => getCustomer(customerId!),
    enabled: !!customerId,
    refetchOnWindowFocus: true,
  });

  const {
    data: transferRequests,
    error: transferRequestError,
    isPending: isTransferRequestPending,
  } = useQuery({
    queryKey: ["transferRequests"],
    queryFn: getTransferRequests,
  });

  /**
   * Callback to update the customerId in the context and cache the new customer data
   */
  const onCustomerCreated = useCallback(
    (newCustomer: ICustomer) => {
      updateCustomerId(newCustomer.id);
      queryClient.setQueryData(["customer", newCustomer.id], newCustomer);
    },
    [updateCustomerId]
  );

  return (
    <Container size="1" px="4" py={{ initial: "4", md: "6" }}>
      {customer ? (
        <Flex direction="column" gapY="5">
          <CustomerInfo
            customer={customer}
            error={customerError}
            loading={isCustomerPending}
          />
          <TransferRequestList
            transferRequests={transferRequests?.results ?? []}
            error={transferRequestError}
            loading={isTransferRequestPending}
          />
        </Flex>
      ) : (
        <CreateCustomer onSuccess={onCustomerCreated} />
      )}
    </Container>
  );
};

export default Main;
