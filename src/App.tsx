import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import Routes from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/query-core";

function App() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;