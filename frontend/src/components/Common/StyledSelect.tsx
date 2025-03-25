import { ListCollection, Portal, Select } from "@chakra-ui/react";

interface CollectionItem {
  value: string;
  label: string;
}

interface StyledSelectProps {
  collection: ListCollection<CollectionItem>;
  placeholder: string;
}

const StyledSelect: React.FC<StyledSelectProps> = ({ collection, placeholder }) => {
  
  return (
    <Select.Root collection={collection} width="12em">
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item item={item} key={item.value}>
                {item.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default StyledSelect;
