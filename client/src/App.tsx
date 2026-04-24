import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Carregar tema salvo do localStorage
  useEffect(() => {
    const saved = localStorage.getItem('galo-admin-settings');
    if (saved) {
      const settings = JSON.parse(saved);
      if (settings.theme) {
        setTheme(settings.theme);
        if (settings.theme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      }
    }
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme={theme}
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
