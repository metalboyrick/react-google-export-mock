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
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import GoogleSheetIcon from "components/icons/GoogleSheetIcon";
import GoogleSheetsIcon from "components/icons/GoogleSheetIcon";
import { blue, gray10, gray4, gray8, white } from "constants/colors";

import * as sty from "./ExportDetail.styles";

function ExportDetail() {
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
            Account Name
          </MenuButton>
          <MenuList width="100%" css={sty.inputText}>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
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
                Tab1
              </MenuButton>
              <MenuList css={sty.inputText} border="none" boxShadow={"0px 4px 12px rgba(0, 0, 0, 0.06)"} borderRadius="8px">
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
                  />
                </Flex>
                <MenuItem>Tab1</MenuItem>
                <MenuItem>Tab2</MenuItem>
                <MenuItem>Tab3</MenuItem>
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
      <FormControl mt="12px" width="100%">
        <Button
          bgColor={blue}
          color={white}
          fontSize="11px"
          width="100%"
          height="32px"
        >
          Export
        </Button>
      </FormControl>
    </Box>
  );
}

export default ExportDetail;
