import ExportData from "./ExportData";
import VarietyData from "./VarietyData";

export default class MarketData {
  week: string;
  varieties: VarietyData[];

  constructor(week: string, varieties: VarietyData[]) {
    this.week = week;
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