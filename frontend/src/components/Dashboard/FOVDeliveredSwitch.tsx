import { Flex, Switch, Text } from "@chakra-ui/react";
import React, { useState } from "react"

const FOVDeliveredSwitch: React.FC = () => {
  const [checked, setChecked] = useState(false);
  
  return (
    <Flex>
      {/* TODO: make this centered on the Switch, not the Switch & Text */}
      <Text fontWeight={checked ? 'normal' : 'bold'} textStyle="xl" position="relative" translate="-0.5em">FOB</Text>
      <Switch.Root size="lg" variant="solid" checked={checked} onCheckedChange={(e) => setChecked(e.checked)}>
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Root>
      <Text fontWeight={checked ? 'bold' : 'normal'} textStyle="xl" position="relative" translate="0.5em">Delivered</Text>
    </Flex>
  );
};

export default FOVDeliveredSwitch;
