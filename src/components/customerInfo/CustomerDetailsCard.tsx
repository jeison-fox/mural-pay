import {
  Avatar,
  Badge,
  Box,
  Callout,
  Card,
  Flex,
  Text,
} from "@radix-ui/themes";
import { BiMoney, BiUser, BiTime, BiWallet } from "react-icons/bi";
import { customerStatusColor } from "constants/customer";
import { capitalize } from "utils/string";
import { formatToCurrency } from "utils/currency";
import type { ICustomerDetailsCardProps } from "customTypes/components/customerInfo";

const CustomerDetailsCard: React.FC<ICustomerDetailsCardProps> = ({
  customer,
  headerAddOn,
}) => {
  return (
    <Card>
      <Flex gapX="3">
        <Avatar
          size="3"
          src="https://picsum.photos/100"
          fallback={<BiUser />}
          alt="Customer Avatar"
        />
        <Flex direction="column" gapY="5" flexGrow="1">
          <Flex
            direction={{ initial: "column", md: "row" }}
            align="start"
            justify="between"
            gapY={{ initial: "3", md: "0" }}
            gapX={{ initial: "0", md: "3" }}
          >
            <Box>
              <Flex gapX="2" align="center">
                <Text size="2" trim="both" weight="bold">
                  {customer.name}
                </Text>
                <Badge color={customerStatusColor[customer.status]}>
                  {capitalize(customer.status)}
                </Badge>
              </Flex>
              <Text size="1" color="gray" trim="both">
                {capitalize(customer.customerType)}
              </Text>
            </Box>
            {customer.account && headerAddOn}
          </Flex>
          {customer.account ? (
            <Flex direction="column" gapY="2">
              <Box>
                <Flex align="center" gapX="1">
                  <Text size="2" weight="bold">
                    Address
                  </Text>
                  <BiWallet />
                </Flex>
                <Text
                  size="1"
                  color="gray"
                  trim="both"
                  style={{ wordBreak: "break-all" }}
                >
                  {customer.account.address}
                </Text>
              </Box>
              <Box>
                <Flex align="center" gapX="1">
                  <Text size="2" weight="bold">
                    Balance
                  </Text>
                  <BiMoney />
                </Flex>
                <Text size="1" color="gray" trim="both">
                  {formatToCurrency(customer.account.balance.balance, false)}{" "}
                  {customer.account.balance.tokenSymbol}
                </Text>
              </Box>
            </Flex>
          ) : (
            <Callout.Root color="blue" size="1">
              <Callout.Icon>
                <BiTime />
              </Callout.Icon>
              <Callout.Text size="1">
                Your account is being verified. It will be ready soon.
              </Callout.Text>
            </Callout.Root>
          )}
        </Flex>
      </Flex>
    </Card>
  );
};

export default CustomerDetailsCard;
