import { createContext, useState, ReactNode, useContext } from 'react';
import DataContextType from './DataContextType';

export const CwtDataContext = createContext<DataContextType | undefined>(undefined);

export const useCwt = () => {
  const cwtDataContext = useContext(CwtDataContext);
  if (!cwtDataContext) {
    throw new Error("useCwtData must be used within CwtDataProvider.")
  };
  return cwtDataContext;
}

interface CwtDataProviderProps {
  children: ReactNode;
}

export const CwtDataProvider = ({ children }: CwtDataProviderProps) => {
  const [value, setValue] = useState<number[]>([]);

  return (
    <CwtDataContext.Provider value={{ value, setValue }}>
      {children}
    </CwtDataContext.Provider>
  );
};
