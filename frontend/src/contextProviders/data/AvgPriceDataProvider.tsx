import { createContext, useState, ReactNode, useContext } from 'react';
import DataContextType from './DataContextType';

export const AvgPriceDataContext = createContext<DataContextType | undefined>(undefined);

export const useAvgPrice = () => {
  const avgPriceDataContext = useContext(AvgPriceDataContext);
  if (!avgPriceDataContext) {
    throw new Error("useAvgPriceData must be used within AvgPriceDataProvider.")
  };
  return avgPriceDataContext;
}

interface AvgPriceDataProviderProps {
  children: ReactNode;
}

export const AvgPriceDataProvider = ({ children }: AvgPriceDataProviderProps) => {
  const [value, setValue] = useState<number[]>([]);

  return (
    <AvgPriceDataContext.Provider value={{ value, setValue }}>
      {children}
    </AvgPriceDataContext.Provider>
  );
};
