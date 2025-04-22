import { createContext, useState, ReactNode, useContext } from 'react';

interface FobContextType {
  fob: boolean;
  setFob: (value: boolean) => void;
}

export const FobContext = createContext<FobContextType | undefined>(undefined);

export const useFob = () => {
  const fobContext = useContext(FobContext);
  if (!fobContext) {
    throw new Error("useFob must be used within FobProvider.")
  };
  return fobContext;
}

interface FobProviderProps {
  children: ReactNode;
}

export const FobProvider = ({ children }: FobProviderProps) => {
  const [fob, setFob] = useState<boolean>(true);

  return (
    <FobContext.Provider value={{ fob, setFob }}>
      {children}
    </FobContext.Provider>
  );
};
