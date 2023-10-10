import AppContent from "./components/AppContent";
import { ThemeContextProvider } from "./contexts/theme-context";
import "./App.css"
function App() {
  // Move the ThemeContextProvider outside of App component.
  // This ensures that the entire component tree is wrapped by it.
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App;
