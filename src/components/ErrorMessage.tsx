import { Callout } from "@radix-ui/themes";
import { BiError } from "react-icons/bi";
import type { IErrorMessageProps } from "customTypes/components/errorMessage";

const ErrorMessage: React.FC<IErrorMessageProps> = ({ error }) => {
  return (
    <Callout.Root color="red">
      <Callout.Icon>
        <BiError />
      </Callout.Icon>
      <Callout.Text>{error}</Callout.Text>
    </Callout.Root>
  );
};

export default ErrorMessage;
