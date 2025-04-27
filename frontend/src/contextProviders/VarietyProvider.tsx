import { createContext, useState, ReactNode, useContext } from 'react';
import FilterContextType from './FilterContextType';

export const VarietyContext = createContext<FilterContextType | undefined>(undefined);

export const useVariety = () => {
  const varietyContext = useContext(VarietyContext);
  if (!varietyContext) {
    throw new Error("useVariety must be used within VarietyProvider.")
  };
  return varietyContext;
}

interface VarietyProviderProps {
  children: ReactNode;
}

export const VarietyProvider = ({ children }: VarietyProviderProps) => {
  const [value, setValue] = useState<string>('');

  return (
    <VarietyContext.Provider value={{ value, setValue }}>
      {children}
    </VarietyContext.Provider>
  );
};
