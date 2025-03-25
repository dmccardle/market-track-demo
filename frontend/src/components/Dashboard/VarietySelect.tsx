import { createListCollection, ListCollection } from "@chakra-ui/react";
import StyledSelect from "../Common/StyledSelect";

const varieties: ListCollection = createListCollection({
  items: [
    { label: "RW", value: "RW" },
    { label: "Russets", value: "Russets" },
    { label: "Yellow", value: "Yellow" },
  ],
});

const VarietySelect: React.FC = () => {
  
  return (
    <StyledSelect collection={varieties} placeholder="Variety" />
  );
};

export default VarietySelect;
