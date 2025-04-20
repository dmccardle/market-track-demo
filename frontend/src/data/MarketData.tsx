import VarietyData from "./VarietyData";

export default class MarketData {
  week: string;
  varieties: VarietyData[];
  
  constructor(week: string, varieties: VarietyData[]) {
    this.week = week;
    this.varieties = varieties;
  };
};