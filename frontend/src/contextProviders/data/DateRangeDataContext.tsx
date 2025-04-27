import { createContext, useState, ReactNode, useContext } from 'react';
import DataContextType from './DataContextType';

export const DateRangeDataContext = createContext<DataContextType | undefined>(undefined);

export const useDateRange = () => {
  const dateRangeDataContext = useContext(DateRangeDataContext);
  if (!dateRangeDataContext) {
    throw new Error("useDateRangeData must be used within DateRangeDataProvider.")
  };
  return dateRangeDataContext;
}

interface DateRangeDataProviderProps {
  children: ReactNode;
}

export const DateRangeDataProvider = ({ children }: DateRangeDataProviderProps) => {
  const [value, setValue] = useState<number[]>([]);

  return (
    <DateRangeDataContext.Provider value={{ value, setValue }}>
      {children}
    </DateRangeDataContext.Provider>
  );
};
