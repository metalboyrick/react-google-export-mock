import {
  Box,
  Flex,
  HStack,
  IconButton,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import GoogleSheetsIcon from "components/icons/GoogleSheetIcon";
import TrashIcon from "components/icons/TrashIcon";

import { gray4, gray6, green3 } from "constants/colors";
import { noop } from "constants/placeholders";
import { hexToRGBA } from "helpers/colorUtils";

import ConnectGoogleAccount from "./components/ConnectGoogleAccount";

function MainWindow() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <SimpleGrid
        width="354px"
        padding="16px"
        border={`1px solid ${gray6}`}
        borderRadius="8px"
        rowGap={"12px"}
      >
        {/* HEADER */}
        <Flex justifyContent={"space-between"} alignItems="center">
          <HStack spacing="12px">
            <Box
              aria-label="Google Sheets Icon"
              width="32px"
              height="32px"
              borderRadius="5px"
              bgColor={hexToRGBA(green3, 0.17)}
              display="flex"
              justifyContent={"center"}
              alignItems="center"
            >
              <GoogleSheetsIcon boxSize="16px" />
            </Box>
            <Text as="b" fontSize={"13px"}>
              Export to Google Sheets
            </Text>
          </HStack>
          <IconButton
            onClick={noop}
            aria-label="Delete button"
            width="24px"
            height="24px"
            padding="0"
            bgColor={gray4}
            minWidth="0"
            icon={<TrashIcon boxSize="16px" />}
            borderRadius="4px"
          />
        </Flex>

        <Flex>
          <ConnectGoogleAccount />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}

export default MainWindow;
