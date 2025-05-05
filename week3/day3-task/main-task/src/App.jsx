import Counter from "./components/Counter";
import HeaderComponent from "./components/Header";
import SearchProducts from "./components/SearchComponent";
import { CustomThemeProvider } from "./components/ThemeProvider";
import { Box, useTheme } from "@mui/material";

function AppContent() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        p: 2,
      }}
    >
    <HeaderComponent />
    <div className="min-h-screen  py-10 px-4 mt-[16px]">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-12">
        Main-task
      </h1>
      <Counter />
      <SearchProducts />
    </div>
    </Box>
  );
}

function App() {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  );
}

export default App;




















/*
import React from "react";
import CounterWithPrevious from "./components/CounterWithPrevious";
import SearchProducts from "./components/SearchProducts";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-violet-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-12">
        React Custom Hooks Playground
      </h1>
      <CounterWithPrevious />
      <SearchProducts />
    </div>
  );
}


*/