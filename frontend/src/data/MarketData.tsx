import ExportData from "./ExportData";
import VarietyData from "./VarietyData";

export default class MarketData {
  weekStartDate: string;
  weekEndDate: string;
  varieties: VarietyData[];

  constructor(weekStartDate: string, weekEndDate: string, varieties: VarietyData[]) {
    this.weekStartDate = weekStartDate;
    this.weekEndDate = weekEndDate;
    this.varieties = varieties;
  };

  getFilteredDataPoints(variety: string, destination: string): ExportData | undefined {
    return this.varieties
    .find((varietyData: VarietyData) => varietyData.name == variety)?.exportDestinations
    .find((exportDestination: ExportData) => exportDestination.id == destination);
  };

  getDataPointsByVariety(variety: string): VarietyData | undefined {
    return this.varieties
    .find((varietyData: VarietyData) => varietyData.name == variety);
  };

  getDataPointsByDestination(destination: string): VarietyData[] | undefined {
    return this.varieties.filter((varietyData: VarietyData) => {
      return varietyData.exportDestinations.find((exportDestination) => {
        return exportDestination.id == destination;
      });
    });
  };
};