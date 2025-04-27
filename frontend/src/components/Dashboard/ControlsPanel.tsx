import { Center, Flex, HStack } from "@chakra-ui/react";
import FOVDeliveredSwitch from "./FOVDeliveredSwitch";
import StyledSelect from "../Common/StyledSelect";
import { VarietyContext } from "@/contextProviders/VarietyProvider";
import { DestinationContext } from "@/contextProviders/DestinationProvider";

interface ControlsPanelProps {
  varietySelectOptions: string[];
  destinationSelectOptions: string[];
};

const ControlsPanel: React.FC<ControlsPanelProps> = ({ varietySelectOptions, destinationSelectOptions }) => {

  return (
    <Flex direction="column" gap={2}>
      <Center>
        <HStack gap={1}>
          <StyledSelect selectValues={varietySelectOptions} placeholder="Variety" stateContext={VarietyContext} />
          <StyledSelect selectValues={destinationSelectOptions} placeholder="Destination" stateContext={DestinationContext} />
        </HStack>
      </Center>
      <Center>
        <FOVDeliveredSwitch />
      </Center>
    </Flex>
  );
};

export default ControlsPanel;
