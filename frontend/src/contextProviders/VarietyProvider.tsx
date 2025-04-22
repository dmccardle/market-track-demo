import { createContext, useState, ReactNode, useContext } from 'react';

interface VarietyContextType {
  variety: string;
  setVariety: (value: string) => void;
}

export const VarietyContext = createContext<VarietyContextType | undefined>(undefined);

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
  const [variety, setVariety] = useState<string>('');

  return (
    <VarietyContext.Provider value={{ variety, setVariety }}>
      {children}
    </VarietyContext.Provider>
  );
};
