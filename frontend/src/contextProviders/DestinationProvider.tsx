import { createContext, useState, ReactNode } from 'react';

interface DestinationContextType {
  destination: string;
  setDestination: (value: string) => void;
}

export const DestinationContext = createContext<DestinationContextType | undefined>(undefined);

interface DestinationProviderProps {
  children: ReactNode;
}

export const DestinationProvider = ({ children }: DestinationProviderProps) => {
  const [destination, setDestination] = useState<string>('');

  return (
    <DestinationContext.Provider value={{ destination, setDestination }}>
      {children}
    </DestinationContext.Provider>
  );
};
