import { createListCollection, ListCollection } from "@chakra-ui/react";
import StyledSelect from "../Common/StyledSelect";

const varieties: ListCollection = createListCollection({
  items: [
    { label: "Quebec", value: "QC" },
    { label: "Ontario", value: "ON" },
    { label: "New Brunswick", value: "NB" },
  ],
});

const DestinationSelect: React.FC = () => {
  
  return (
    <StyledSelect collection={varieties} placeholder="Destination" />
  );
};

export default DestinationSelect;
