import { Center, Flex, HStack } from "@chakra-ui/react";
import VarietySelect from "./VarietySelect";
import FOVDeliveredSwitch from "./FOVDeliveredSwitch";
import DestinationSelect from "./DestinationSelect";

interface ControlsPanelProps {
  varietySelectOptions: String[];
  destinationSelectOptions: String[];
};

const ControlsPanel: React.FC<ControlsPanelProps> = ({ varietySelectOptions, destinationSelectOptions }) => {
  console.log(varietySelectOptions);
  console.log(destinationSelectOptions);
  // TODO: pass string lists into respective Select dropdowns
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
