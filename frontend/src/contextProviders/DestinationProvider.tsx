import { createContext, useState, ReactNode, useContext } from 'react';

interface DestinationContextType {
  destination: string;
  setDestination: (value: string) => void;
}

export const DestinationContext = createContext<DestinationContextType | undefined>(undefined);

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
  const [destination, setDestination] = useState<string>('');

  return (
    <DestinationContext.Provider value={{ destination, setDestination }}>
      {children}
    </DestinationContext.Provider>
  );
};
