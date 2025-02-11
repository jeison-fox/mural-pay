import { Flex, Select, Text, TextField } from "@radix-ui/themes";
import { Label } from "radix-ui";
import { Controller } from "react-hook-form";
import type { ICreateCustomerFieldsProps } from "customTypes/components/createCustomer";

const CreateCustomerFields: React.FC<ICreateCustomerFieldsProps> = ({
  control,
  errors,
}) => {
  return (
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
        name="organizationType"
        control={control}
        render={({ field }) => (
          <Flex direction="column" gapY="1">
            <Label.Root htmlFor="organizationType">
              <Text size="2">Organization Type</Text>
            </Label.Root>
            <Select.Root
              name={field.name}
              value={field.value}
              onValueChange={field.onChange}
            >
              <Select.Trigger id="organizationType" />
              <Select.Content>
                <Select.Item value="BUSINESS">Business</Select.Item>
                <Select.Item value="INDIVIDUAL">Individual</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        )}
      />
    </Flex>
  );
};

export default CreateCustomerFields;
