import { Box, Flex, Tabs, Text } from "@radix-ui/themes";
import TransferRequestCard from "components/transferRequest/TransferRequestCard";
import type { ITransferRequestTabsContentProps } from "customTypes/components/transferRequestTabsContent";

const TransferRequestTabsContent: React.FC<
  ITransferRequestTabsContentProps
> = ({ groupedTransferRequests }) => {
  return (
    <Box>
      <Tabs.Content value="inReview">
        {groupedTransferRequests.inReview.length > 0 ? (
          <Flex direction="column" gapY="3">
            {groupedTransferRequests.inReview.map((transferRequest) => (
              <TransferRequestCard
                key={transferRequest.id}
                transferRequest={transferRequest}
              />
            ))}
          </Flex>
        ) : (
          <Text size="2" align="center" as="p">
            No transfer requests in review
          </Text>
        )}
      </Tabs.Content>

      <Tabs.Content value="pending">
        {groupedTransferRequests.pending.length > 0 ? (
          <Flex direction="column" gapY="3">
            {groupedTransferRequests.pending.map((transferRequest) => (
              <TransferRequestCard
                key={transferRequest.id}
                transferRequest={transferRequest}
              />
            ))}
          </Flex>
        ) : (
          <Text size="2" align="center" as="p">
            No pending transfer requests
          </Text>
        )}
      </Tabs.Content>

      <Tabs.Content value="executed">
        {groupedTransferRequests.executed.length > 0 ? (
          <Flex direction="column" gapY="3">
            {groupedTransferRequests.executed.map((transferRequest) => (
              <TransferRequestCard
                key={transferRequest.id}
                transferRequest={transferRequest}
              />
            ))}
          </Flex>
        ) : (
          <Text size="2" align="center" as="p">
            No executed transfer requests
          </Text>
        )}
      </Tabs.Content>

      <Tabs.Content value="canceled">
        {groupedTransferRequests.canceled.length > 0 ? (
          <Flex direction="column" gapY="3">
            {groupedTransferRequests.canceled.map((transferRequest) => (
              <TransferRequestCard
                key={transferRequest.id}
                transferRequest={transferRequest}
              />
            ))}
          </Flex>
        ) : (
          <Text size="2" align="center" as="p">
            No canceled/failed transfer requests
          </Text>
        )}
      </Tabs.Content>
    </Box>
  );
};
export default TransferRequestTabsContent;
