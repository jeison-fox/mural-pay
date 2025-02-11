import { Badge, Button, Card, Callout, DataList, Flex, IconButton } from "@radix-ui/themes";
import { useMutation } from "@tanstack/react-query";
import { BiError, BiPlay, BiX } from "react-icons/bi";
import { executeTransferRequest } from "api/endpoints/transferRequest";
import queryClient from "api/queryClient";
import { transferRequestStatusColor } from "constants/transferRequest";
import { capitalize } from "utils/string";
import { formatDateTime } from "utils/date";
import { formatToCurrency } from "utils/currency";
import type { ITransferRequestCardProps } from "customTypes/components/transferRequestCard";

const TransferRequestCard: React.FC<ITransferRequestCardProps> = ({
  transferRequest,
}) => {
  const mutation = useMutation({
    mutationFn: (transferRequestId: string) =>
      executeTransferRequest(transferRequestId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transferRequests"] });
    },
  });

  const onExecuteTransferRequest = () => {
    mutation.mutate(transferRequest.id);
  };

  const resetMutation = () => {
    mutation.reset();
  };

  return (
    <Card>
      <Flex direction="column" gapY="4">
        {mutation.error && (
          <Callout.Root color="red" size="1">
            <Callout.Icon>
              <BiError />
            </Callout.Icon>
            <Flex gapX="4">
              <Callout.Text size="1">{mutation.error.message}</Callout.Text>
              <IconButton
                variant="ghost"
                color="red"
                size="1"
                onClick={resetMutation}
              >
                <BiX />
              </IconButton>
            </Flex>
          </Callout.Root>
        )}
        <DataList.Root size="1">
          <DataList.Item>
            <DataList.Label>Status</DataList.Label>
            <DataList.Value>
              <Flex gapX="4">
                <Badge
                  size="2"
                  color={transferRequestStatusColor[transferRequest.status]}
                >
                  {capitalize(transferRequest.status)}
                </Badge>
                {transferRequest.status === "IN_REVIEW" && (
                  <Button
                    size="1"
                    color="blue"
                    onClick={onExecuteTransferRequest}
                    disabled={mutation.isPending}
                    loading={mutation.isPending}
                  >
                    <BiPlay />
                    Execute
                  </Button>
                )}
              </Flex>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Created</DataList.Label>
            <DataList.Value>
              {formatDateTime(transferRequest.createdAt)}
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Type</DataList.Label>
            <DataList.Value>
              {transferRequest.recipientsInfo[0].recipientTransferType}
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Token Amount</DataList.Label>
            <DataList.Value>
              {transferRequest.recipientsInfo[0].tokenAmount}
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>FIAT Amount</DataList.Label>
            <DataList.Value>
              {formatToCurrency(
                transferRequest.recipientsInfo[0].fiatDetails.fiatAmount
              )}
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Currency</DataList.Label>
            <DataList.Value>
              {transferRequest.recipientsInfo[0].fiatDetails.currencyCode}
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Flex>
    </Card>
  );
};

export default TransferRequestCard;
