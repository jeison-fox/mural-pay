import { useState } from "react";
import { Button, Dialog, Flex } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { BiTransfer } from "react-icons/bi";
import CreateTransferRequestFields from "components/createTransferRequest/CreateTransferRequestFields";
import ErrorMessage from "components/ErrorMessage";
import { createTransferRequest } from "api/endpoints/transferRequest";
import queryClient from "api/queryClient";
import createTransferRequestSchema from "schemas/createTransferRequest";
import { getAugmentedTransferRequestData } from "utils/transferRequest";
import type {
  ICreateTransferRequestProps,
  TCreateTransferRequestFormValues,
} from "customTypes/components/createTransferRequest";

const CreateTransferRequest: React.FC<ICreateTransferRequestProps> = ({
  customer,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TCreateTransferRequestFormValues>({
    resolver: zodResolver(createTransferRequestSchema),
    defaultValues: {
      name: "",
      tokenAmount: 0,
      bankName: "",
      accountType: "SAVINGS",
      bankAccountNumber: "",
      walletAddress: "",
    },
    mode: "onChange",
  });

  const mutation = useMutation({
    mutationFn: createTransferRequest,
    onSuccess: () => {
      setIsModalOpen(false);
      queryClient.invalidateQueries({ queryKey: ["transferRequests"] });
    },
  });

  const errorMessage =
    mutation.error instanceof Error
      ? mutation.error.message
      : "An error occurred while creating the transfer request";

  const toggleModal = () => {
    !mutation.isPending && setIsModalOpen((prev) => !prev);
  };

  const onSubmit = (data: TCreateTransferRequestFormValues) => {
    const augmentedData = getAugmentedTransferRequestData(data, customer);
    mutation.mutate(augmentedData);
  };

  return (
    <>
      <Button type="button" onClick={toggleModal} size="1">
        <BiTransfer />
        New Transfer Request
      </Button>
      <Dialog.Root open={isModalOpen} onOpenChange={toggleModal}>
        <Dialog.Content align="start" maxWidth="400px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" gapY="4">
              <Dialog.Title as="h3" mb="0">
                Create Tranfer Request
              </Dialog.Title>
              {mutation.isError && <ErrorMessage error={errorMessage} />}
              <CreateTransferRequestFields control={control} errors={errors} />
              <Flex gap="3" justify="end">
                <Dialog.Close>
                  <Button
                    type="button"
                    variant="soft"
                    color="gray"
                    disabled={mutation.isPending}
                  >
                    Cancel
                  </Button>
                </Dialog.Close>
                <Button
                  type="submit"
                  loading={mutation.isPending}
                  disabled={!isValid || mutation.isPending}
                >
                  Create
                </Button>
              </Flex>
            </Flex>
          </form>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};

export default CreateTransferRequest;
