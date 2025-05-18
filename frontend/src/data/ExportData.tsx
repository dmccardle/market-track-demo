import DataPoint from "./DataPoint";

export default interface ExportData {
  id: string;
  commonName: string;
  currency: string;
  fob?: DataPoint;
  delivered?: DataPoint;
};