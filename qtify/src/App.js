import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./routes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#34C94B",
    },
  },
});

const router = createBrowserRouter(routes);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
