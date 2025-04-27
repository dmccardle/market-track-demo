import { createContext, useState, ReactNode, useContext } from 'react';
import FilterContextType from './FilterContextType';

export const DestinationContext = createContext<FilterContextType | undefined>(undefined);

export const useDesintation = () => {
  const destinationContext = useContext(DestinationContext);
  if (!destinationContext) {
    throw new Error("useDestination must be used within DestinationProvider.")
  };
  return destinationContext;
}

interface DestinationProviderProps {
  children: ReactNode;
}

export const DestinationProvider = ({ children }: DestinationProviderProps) => {
  const [value, setValue] = useState<string>('');

  return (
    <DestinationContext.Provider value={{ value, setValue }}>
      {children}
    </DestinationContext.Provider>
  );
};
