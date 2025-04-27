import { ReactNode } from 'react';
import { AvgPriceDataProvider } from './AvgPriceDataProvider';
import { CwtDataProvider } from './CwtDataProvider';
import { DateRangeDataProvider } from './DateRangeDataContext';

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {

  return (
    <AvgPriceDataProvider>
      <CwtDataProvider>
        <DateRangeDataProvider>
          {children}
        </DateRangeDataProvider>
      </CwtDataProvider>
    </AvgPriceDataProvider>
  );
};
