import { useMemo } from "react";
import { Flex, Skeleton, Tabs, Text } from "@radix-ui/themes";
import TransferRequestTabsContent from "components/transferRequest/TransferRequestTabsContent";
import ErrorMessage from "components/ErrorMessage";
import { getGroupedTransferRequests } from "utils/transferRequest";
import type { ITransferRequestListProps } from "customTypes/components/transferRequest";

const TransferRequestList: React.FC<ITransferRequestListProps> = ({
  transferRequests,
  error,
  loading,
}) => {
  const groupedTransferRequests = useMemo(() => {
    return getGroupedTransferRequests(transferRequests);
  }, [transferRequests]);

  if (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An error occurred while fetching transfer requests";

    return <ErrorMessage error={errorMessage} />;
  }

  if (loading) {
    return <Skeleton width="100%" height="200px" />;
  }

  return (
    <Flex direction="column" gapY="2">
      <Text weight="bold">Transfer Requests</Text>
      <Tabs.Root defaultValue="inReview">
        <Flex direction="column" gapY="2">
          <Tabs.List justify="center">
            <Tabs.Trigger value="inReview">In Review</Tabs.Trigger>
            <Tabs.Trigger value="pending">Pending</Tabs.Trigger>
            <Tabs.Trigger value="executed">Executed</Tabs.Trigger>
            <Tabs.Trigger value="canceled">Canceled/Failed</Tabs.Trigger>
          </Tabs.List>
          <TransferRequestTabsContent
            groupedTransferRequests={groupedTransferRequests}
          />
        </Flex>
      </Tabs.Root>
    </Flex>
  );
};

export default TransferRequestList;
