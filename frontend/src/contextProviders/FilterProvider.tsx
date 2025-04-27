import { ReactNode } from 'react';
import { VarietyProvider } from './VarietyProvider';
import { DestinationProvider } from './DestinationProvider';
import { FobProvider } from './FobProvider';

interface FilterProviderProviderProps {
  children: ReactNode;
}

export const FilterProvider = ({ children }: FilterProviderProviderProps) => {

  return (
    <VarietyProvider>
      <DestinationProvider>
        <FobProvider>
          {children}
        </FobProvider>
      </DestinationProvider>
    </VarietyProvider>
  );
};
