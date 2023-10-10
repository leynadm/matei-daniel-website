import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the type for the possible strings in contextTheme
type Theme= 'dark' | 'light'


// Define the type for your context values
type ThemeContextType = {
  contextTheme: Theme;
  setContextTheme: Dispatch<SetStateAction<Theme>>;
};


// Create the context
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Define the type for your ThemeContextProvider props
type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [contextTheme, setContextTheme] = useState<'dark'|'light'>("light");
 
  const values: ThemeContextType = { contextTheme, setContextTheme };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
