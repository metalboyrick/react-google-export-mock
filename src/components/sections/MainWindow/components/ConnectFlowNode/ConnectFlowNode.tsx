import { Button } from "@chakra-ui/react";
import DatabaseIcon from "components/icons/DatabaseIcon";
import { gray10, gray3 } from "constants/colors";

function ConnectFlowNode() {
  return (
    <Button
      color={gray10}
      bgColor={gray3}
      fontSize="11px"
      lineHeight="13.2px"
      width="100%"
      padding="8px 12px"
      fontWeight="normal"
      height="32px"
      borderRadius="9999px"
      alignItems={"center"}
    >
      <DatabaseIcon boxSize="16px" marginRight={"4px"}/>
      Connect Flow Node to Import to Google Sheets
    </Button>
  );
}

export default ConnectFlowNode;
