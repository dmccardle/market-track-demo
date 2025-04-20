import { createListCollection, ListCollection, CollectionItem, Portal, Select } from "@chakra-ui/react";


interface StyledSelectProps {
  selectValues: string[];
  placeholder: string;
}

const StyledSelect: React.FC<StyledSelectProps> = ({ selectValues, placeholder }) => {
  const collection: ListCollection<CollectionItem> = createListCollection({
    items: selectValues.map((value: string) => {
      return { value: value, label: value } as CollectionItem;
    }),
  });

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
