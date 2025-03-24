import { createListCollection, ListCollection, Portal, Select } from "@chakra-ui/react";

const varieties: ListCollection = createListCollection({
  items: [
    { label: "RW", value: "RW" },
    { label: "Russets", value: "Russets" },
    { label: "Yellow", value: "Yellow" },
  ],
});

const VarietySelect: React.FC = () => {
  
  return (
    <Select.Root collection={varieties}>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Variety" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {varieties.items.map((variety) => (
              <Select.Item item={variety} key={variety.value}>
                {variety.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default VarietySelect;
