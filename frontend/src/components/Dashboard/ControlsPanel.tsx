import { Center, Flex, HStack } from "@chakra-ui/react";
import VarietySelect from "./VarietySelect";
import FOVDeliveredSwitch from "./FOVDeliveredSwitch";
import DestinationSelect from "./DestinationSelect";

const ControlsPanel: React.FC = () => {
  
  return (
    <Flex direction="column" gap={2}>
      <Center>
        <HStack gap={1}>
          <VarietySelect />
          <DestinationSelect />
        </HStack>
      </Center>
      <Center>
        <FOVDeliveredSwitch />
      </Center>
    </Flex>
  );
};

export default ControlsPanel;
