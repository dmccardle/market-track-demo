import DataPoint from "./DataPoint";
import ExportData from "./ExportData";
import VarietyData from "./VarietyData";

export default class MarketData {
  week: string;
  varieties: VarietyData[];

  constructor(week: string, varieties: VarietyData[]) {
    this.week = week;
    this.varieties = varieties;
  };

  getFilteredDataPoints(fob: boolean, variety?: string, destination?: string): DataPoint[] {
    const initialList = this.varieties;
    // 1) TODO: this can likely be changed to an exact "select" since there **in theory** should only be one variety that matches - it can return `VarietyData`
    const varietyFilteredList: VarietyData[] = variety ? initialList.filter((data: VarietyData) => data.name == variety) : initialList;

    // TODO: create list of export destinations from remaining varieties
    const initialDestinations: ExportData[] = varietyFilteredList.flatMap((value) => value.exportDestinations);
    const destinationsFilteredList: ExportData[] = destination ? initialDestinations.filter((data) => data.id == destination) : initialDestinations;

    // so, the double line graph will need two separate arrays. 
    // after I have the filtered points, I need to return an object w/ two lists - use map() to build
    // TODO: make this work
    const dataTest: DataPoint = { avgPrice: 17, cwt: 1000 };
    return [ dataTest ];
    // return fob ? destinationsFilteredList.flatMap((destinationData) => destinationData.fob) : destinationsFilteredList.flatMap((destinationData) => destinationData.delivered)
  };
};