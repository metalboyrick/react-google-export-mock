import { useState } from "react";
import { ChevronDownIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from "@chakra-ui/react";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import GoogleSheetIcon from "components/icons/GoogleSheetIcon";
import { blue, gray10, gray4, gray8, white } from "constants/colors";

import * as sty from "./ExportDetail.styles";
import { TAB_NAMES } from "./ExportDetail.constants";

dayjs.extend(relativeTime);

function ExportDetail() {

  const [tabSearchValue, setTabSearchValue] = useState("");
  const [lastStatus, setLastStatus] = useState<string | null>(null);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedTab, setSelectedTab] = useState("Tab1");

  const handleExportClick = () => {
    const today = new Date();
    setLastStatus(today.toString());
  }

  return (
    <Box width="100%">
      <FormControl width="100%">
        <FormLabel css={sty.formLabel}>Google Account</FormLabel>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon boxSize="20px" />}
            width="100%"
            textAlign={"left"}
            variant="unstyled"
            css={sty.inputText}
            border={`1px solid ${gray4}`}
            borderRadius="4px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="0 10px"
            height="32px"
          >
            {selectedAccount.length === 0 ? "Account Name" : selectedAccount}
          </MenuButton>
          <MenuList width="100%" css={sty.inputText}>
            <MenuItem onClick={() => setSelectedAccount("Account1")}>Account1</MenuItem>
            <MenuItem onClick={() => setSelectedAccount("Account2")}>Account2</MenuItem>
            <MenuItem onClick={() => setSelectedAccount("Account3")}>Account3</MenuItem>
          </MenuList>
        </Menu>
      </FormControl>
      <FormControl width="100%" mt="12px">
        <FormLabel css={sty.formLabel}>File</FormLabel>
        <Flex
          border={`1px solid ${gray4}`}
          borderRadius={"4px"}
          padding="4px 8px"
          height="32px"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <HStack>
            <GoogleSheetIcon boxSize="20px" />
            <Input
              css={sty.inputText}
              variant="unstyled"
              height="100%"
              borderRadius="0"
              width="100%"
              readOnly
              value="sheet name"
            />
          </HStack>

          <HStack height="100%" spacing="8px">
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={
                  <Box
                    w="16px"
                    h="16px"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <ChevronDownIcon boxSize="12px" />
                  </Box>
                }
                height="100%"
                fontSize="10px"
                padding="6px 4px 6px 12px"
                borderRadius="24px"
                color={gray8}
              >
                {selectedTab}
              </MenuButton>
              <MenuList
                css={sty.inputText}
                border="none"
                boxShadow={"0px 4px 12px rgba(0, 0, 0, 0.06)"}
                borderRadius="8px"
              >
                <Flex
                  border={`1px solid ${gray4}`}
                  borderRadius="4px"
                  padding="6px 8px"
                  height="28px"
                  alignItems="center"
                  gap="4px"
                  margin="4px"
                >
                  <SearchIcon color={gray8} />
                  <Input
                    placeholder="Search"
                    color={gray8}
                    variant="unstyled"
                    borderRadius="0"
                    fontSize="10px"
                    width="100%"
                    onChange={(e) => setTabSearchValue(e.target.value)}
                  />
                </Flex>
                {TAB_NAMES.filter((item) => item.includes(tabSearchValue)).map(
                  (item, index) => (
                    <MenuItem key={index} onClick={() => setSelectedTab(item)}>{item}</MenuItem>
                  )
                )}
              </MenuList>
            </Menu>
            <IconButton
              aria-label="Close Icon"
              icon={<CloseIcon />}
              variant="ghost"
              width="20px"
              height="20px"
              fontSize="8px"
              minWidth="0"
              color={gray8}
              _hover={{
                color: gray10,
              }}
            />
          </HStack>
        </Flex>
      </FormControl>
      <FormControl mt="12px" width="100%" alignItems="center">
        <Button
          bgColor={blue}
          color={white}
          fontSize="11px"
          width="100%"
          height="32px"
          onClick={handleExportClick}
        >
          Export
        </Button>
        {
          lastStatus && <Text color={gray8} fontSize="10px" mt="8px" align="center">
            {`Last export ${dayjs(lastStatus).fromNow()}`}
          </Text>
        }

      </FormControl>
    </Box>
  );
}

export default ExportDetail;
