import { ReactNode } from 'react';
import { VarietyProvider } from './VarietyProvider';
import { DestinationProvider } from './DestinationProvider';

interface DestinationProviderProps {
  children: ReactNode;
}

export const FilterProvider = ({ children }: DestinationProviderProps) => {

  return (
    <VarietyProvider>
      <DestinationProvider>
        {children}
      </DestinationProvider>
    </VarietyProvider>
  );
};
