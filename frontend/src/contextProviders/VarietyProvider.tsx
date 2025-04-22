import { createContext, useState, ReactNode } from 'react';

interface VarietyContextType {
  variety: string;
  setVariety: (value: string) => void;
}

export const VarietyContext = createContext<VarietyContextType | undefined>(undefined);

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
