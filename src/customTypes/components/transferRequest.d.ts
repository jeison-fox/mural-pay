export interface ITransferRequestListProps {
  transferRequests: ITransferRequest[] | undefined;
  error: Error | null;
  loading: boolean;
}

export type TGroupedTransferRequests = {
  inReview: ITransferRequest[];
  pending: ITransferRequest[];
  executed: ITransferRequest[];
  canceled: ITransferRequest[];
};
