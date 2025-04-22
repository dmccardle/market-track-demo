import { ReactNode } from 'react';
import { VarietyProvider } from './VarietyProvider';
import { DestinationProvider } from './DestinationProvider';
import { FobProvider } from './FobProvider';

interface DestinationProviderProps {
  children: ReactNode;
}

export const FilterProvider = ({ children }: DestinationProviderProps) => {

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
