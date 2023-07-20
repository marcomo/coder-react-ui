import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(",")
  },
});

export default theme;