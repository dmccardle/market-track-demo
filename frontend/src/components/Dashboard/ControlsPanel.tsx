import { Center, Flex, HStack, Select, Switch } from "@chakra-ui/react";
import VarietySelect from "./VarietySelect";
import FOVDeliveredSwitch from "./FOVDeliveredSwitch";

const ControlsPanel: React.FC = () => {
  
  return (
    <Flex direction="column" gap={2}>
      <Center>
        <HStack gap={1}>
          <VarietySelect />
          <VarietySelect />
        </HStack>

      </Center>
      <Center>
        <FOVDeliveredSwitch />
      </Center>
    </Flex>
  );
};

export default ControlsPanel;
