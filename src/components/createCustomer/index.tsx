import { useState } from "react";
import { Button, Dialog, Flex } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { BiUser } from "react-icons/bi";
import CreateCustomerFields from "components/createCustomer/CreateCustomerFields";
import ErrorMessage from "components/ErrorMessage";
import { createCustomer } from "api/endpoints/customer";
import createCustomerSchema from "schemas/createCustomer";
import type {
  ICreateCustomerProps,
  TCreateCustomerFormValues,
} from "customTypes/components/createCustomer";

const CreateCustomer: React.FC<ICreateCustomerProps> = ({ onSuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TCreateCustomerFormValues>({
    resolver: zodResolver(createCustomerSchema),
    defaultValues: {
      name: "",
      organizationType: "BUSINESS",
    },
    mode: "onChange",
  });

  const mutation = useMutation({
    mutationFn: createCustomer,
    onSuccess: (newCustomer) => {
      setIsModalOpen(false);
      onSuccess(newCustomer);
    },
  });

  const errorMessage =
    mutation.error instanceof Error
      ? mutation.error.message
      : "An error occurred while creating the customer";

  const toggleModal = () => {
    !mutation.isPending && setIsModalOpen((prev) => !prev);
  };

  const onSubmit = (data: TCreateCustomerFormValues) => {
    mutation.mutate(data);
  };

  return (
    <Flex justify="center">
      <Button type="button" onClick={toggleModal}>
        <BiUser />
        Create Customer
      </Button>
      <Dialog.Root open={isModalOpen} onOpenChange={toggleModal}>
        <Dialog.Content align="start" maxWidth="400px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" gapY="4">
              <Dialog.Title as="h3" mb="0">
                Create Customer Account
              </Dialog.Title>
              {mutation.isError && <ErrorMessage error={errorMessage} />}
              <CreateCustomerFields control={control} errors={errors} />
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
    </Flex>
  );
};

export default CreateCustomer;
