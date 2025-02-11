import { Box, Flex, Select, Text, TextField } from "@radix-ui/themes";
import { Label } from "radix-ui";
import { Controller } from "react-hook-form";
import type { ICreateTransferRequestFieldsProps } from "customTypes/components/createTransferRequest";

const CreateTransferRequestFields: React.FC<
  ICreateTransferRequestFieldsProps
> = ({ control, errors }) => {
  return (
    <Flex direction="column" gapY="4">
      <Box>
        <Controller
          name="tokenAmount"
          control={control}
          render={({ field }) => (
            <Flex direction="column" gapY="1">
              <Label.Root htmlFor="tokenAmount">
                <Text size="2">Token Amount</Text>
              </Label.Root>
              <TextField.Root
                id="tokenAmount"
                name={field.name}
                value={field.value}
                onBlur={field.onBlur}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  field.onChange(inputValue === "" ? "" : Number(inputValue));
                }}
                type="number"
              />
              {errors.tokenAmount && (
                <Text size="1" color="red">
                  {errors.tokenAmount.message}
                </Text>
              )}
            </Flex>
          )}
        />
      </Box>
      <Box>
        <Text size="3" weight="bold" as="p" mb="2">
          Recipients Information
        </Text>
        <Flex direction="column" gapY="2">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Flex direction="column" gapY="1">
                <Label.Root htmlFor="name">
                  <Text size="2">Name</Text>
                </Label.Root>
                <TextField.Root
                  id="name"
                  name={field.name}
                  value={field.value}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                />
                {errors.name && (
                  <Text size="1" color="red">
                    {errors.name.message}
                  </Text>
                )}
              </Flex>
            )}
          />
          <Controller
            name="bankName"
            control={control}
            render={({ field }) => (
              <Flex direction="column" gapY="1">
                <Label.Root htmlFor="bankName">
                  <Text size="2">Bank Name</Text>
                </Label.Root>
                <TextField.Root
                  id="bankName"
                  name={field.name}
                  value={field.value}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                />
                {errors.bankName && (
                  <Text size="1" color="red">
                    {errors.bankName.message}
                  </Text>
                )}
              </Flex>
            )}
          />
          <Controller
            name="bankAccountNumber"
            control={control}
            render={({ field }) => (
              <Flex direction="column" gapY="1">
                <Label.Root htmlFor="bankAccountNumber">
                  <Text size="2">Bank Account Number</Text>
                </Label.Root>
                <TextField.Root
                  id="bankAccountNumber"
                  name={field.name}
                  value={field.value}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                />
                {errors.bankAccountNumber && (
                  <Text size="1" color="red">
                    {errors.bankAccountNumber.message}
                  </Text>
                )}
              </Flex>
            )}
          />
          <Controller
            name="accountType"
            control={control}
            render={({ field }) => (
              <Flex direction="column" gapY="1">
                <Label.Root htmlFor="accountType">
                  <Text size="2">Account Type</Text>
                </Label.Root>
                <Select.Root
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <Select.Trigger id="accountType" />
                  <Select.Content>
                    <Select.Item value="SAVINGS">Savings</Select.Item>
                    <Select.Item value="CHECKING">Checking</Select.Item>
                  </Select.Content>
                </Select.Root>
              </Flex>
            )}
          />
        </Flex>
      </Box>
      <Box>
        <Text size="3" weight="bold" as="p" mb="2">
          Wallet Information
        </Text>
        <Controller
          name="walletAddress"
          control={control}
          render={({ field }) => (
            <Flex direction="column" gapY="1">
              <Label.Root htmlFor="walletAddress">
                <Text size="2">Wallet Address</Text>
              </Label.Root>
              <TextField.Root
                id="walletAddress"
                name={field.name}
                value={field.value}
                onBlur={field.onBlur}
                onChange={field.onChange}
              />
              {errors.walletAddress && (
                <Text size="1" color="red">
                  {errors.walletAddress.message}
                </Text>
              )}
            </Flex>
          )}
        />
      </Box>
    </Flex>
  );
};

export default CreateTransferRequestFields;
