import { createContext, useContext } from 'react';

export interface DateRangeContextType {
  dateRange: number[];
  setDateRange: (dateRange: number[]) => void; 
};

const DateRangeContext = createContext<DateRangeContextType | undefined>(undefined);

export const useDateRange = () => {
  const dateRangeContext = useContext(DateRangeContext);
  if (!dateRangeContext) {
    throw new Error("useDateRange must be used within DateRangeProvider.")
  };
  return dateRangeContext;
};

export default DateRangeContext;
