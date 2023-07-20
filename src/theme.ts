import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = extendTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(",")
  },
  colorSchemes: {
    dark: {
      palette: {
        neutral: {
          // experimenting with css variables in MUI
          // this is a global var set in index.scss
          light: "var(--color-ink-100)",
          main: "var(--color-ink-200)"
        },
      }
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "outlined",
        color: "neutral"
      },
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
          color: theme.colorSchemes.dark.palette.neutral.main,
          fontWeight: 400,
          fontSize: "1rem",
          height: "4rem",
          display: "flex",
        }),
        containedNeutral: ({ theme }) => ({
          marginTop: 0,
          marginBottom: 0,
          borderRadius: 0,
          "&.active, &:hover": {
            backgroundColor: "var(--color-paper-300)",
            color: theme.colorSchemes.dark.palette.neutral.light,
          },
        }),
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: 'var(--color-paper-200)',
          borderBottom: 'var(--border-100)'
        })
      }
    }
  }
});

export default theme;