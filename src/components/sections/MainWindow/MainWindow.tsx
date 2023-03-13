import { useState } from "react";

import {
  Box,
  Button,
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

import { StateProvider } from "contexts/StateContext";

import ConnectFlowNode from "./components/ConnectFlowNode";
import ConnectGoogleAccount from "./components/ConnectGoogleAccount";
import ExportDetail from "./components/ExportDetail";
import { LOGIN_STATE, CONNECT_FLOW_STATE, EXPORT_STATE } from "./MainWindow.constants";

function MainWindow() {
  const [currentState, setCurrentState] = useState(LOGIN_STATE);

  const handleConnectFlowToggler = () => {
    if(currentState !== CONNECT_FLOW_STATE) setCurrentState(CONNECT_FLOW_STATE);
    else setCurrentState(LOGIN_STATE);
  }

  return (
    <StateProvider
      currentState={currentState}
      setCurrentState={(newState: number) => setCurrentState(newState)}
    >
      <Flex
        width="100vw"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Button mb="4px" size="xs" onClick={handleConnectFlowToggler}>
          {currentState === CONNECT_FLOW_STATE
            ? "Show Normal Flow"
            : "Show Connect Flow State"}
        </Button>
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
            {currentState === LOGIN_STATE && <ConnectGoogleAccount /> }
            {currentState === CONNECT_FLOW_STATE && <ConnectFlowNode /> }
            {currentState === EXPORT_STATE && <ExportDetail />}
          </Flex>
        </SimpleGrid>
      </Flex>
    </StateProvider>
  );
}

export default MainWindow;
