import { Box, Button, SimpleGrid, VStack, Text, HStack } from "@chakra-ui/react";
import GoogleIcon from "components/icons/GoogleIcon";
import { blue, gray1, gray3, gray8, white } from "constants/colors";
import { noop } from "constants/placeholders";

function ConnectGoogleAccount() {
  return (
    <SimpleGrid
      rowGap="12px"
      padding="12px"
      bgColor={gray1}
      width="100%"
      borderRadius="8px"
    >
      <HStack spacing="12px" width="100%">
        <Box
          borderRadius="80px"
          bgColor={gray3}
          padding="10px"
          width="36px"
          height="36px"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
        >
          <GoogleIcon />
        </Box>
        <VStack spacing="4px" alignItems="left">
          <Text as="b" fontSize="13px" lineHeight={"13px"}>
            Connect Google Account
          </Text>
          <Text fontSize="11px" lineHeight={"13px"} color={gray8}>
            Please connect Google Account to use this block
          </Text>
        </VStack>
      </HStack>

      <Box>
        <Button
          onClick={noop}
          bgColor={blue}
          color={white}
          fontSize={"10px"}
          borderRadius="4px"
          padding="10px"
          height="24px"
        >
          Connect
        </Button>
      </Box>
    </SimpleGrid>
  );
}

export default ConnectGoogleAccount;
