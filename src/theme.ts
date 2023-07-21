import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = extendTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    h1: {
      textAlign: "left",
      fontSize: "1.5rem",
      // experimenting with css variables in MUI
      // this is a global var set in index.scss
      color: "var(--color-ink-100)"
    },
    h2: {
      textAlign: "left",
      fontSize: "1rem",
      color: "var(--color-ink-200)"
    },
  },
  spacing: 16,
  colorSchemes: {
    dark: {
      palette: {
        neutral: {
          light: "var(--color-ink-100)",
          main: "var(--color-ink-200)"
        },
        background: {
          default: "var(--color-paper-100)",
          paper: "var(--color-paper-200)",
          paperLight: "var(--color-paper-300)",
        },
        text: {
          primary: "var(--color-ink-100)",
          secondary: "var(--color-ink-200)"
        },
        Button: {
          inheritContainedBg: "var(--color-emphasis)"
        }
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
          color: theme.colorSchemes.dark.palette.text.primary,
          backgroundColor: theme.colorSchemes.dark.palette.Button.inheritContainedBg,
          fontWeight: 400,
          fontSize: "1rem",
          display: "flex",
        }),
        containedNeutral: ({ theme }) => ({
          marginTop: 0,
          marginBottom: 0,
          borderRadius: 0,
          color: theme.colorSchemes.dark.palette.neutral.main,
          backgroundColor: "transparent",
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
      styleOverrides: {
        root: {
          color: "var(--color-emphasis)",
          "&:hover": {
            textDecoration: "underline"
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          spacing: 0,
          backgroundColor: 'var(--color-paper-200)',
          borderBottom: 'var(--border-100)'
        }
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          border: "var(--border-100)",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderCollapse: "unset",
          border: "none",
          background: theme.colorSchemes.dark.palette.background.paper,
          boxShadow: `0 0 0 1px ${theme.colorSchemes.dark.palette.background.default} inset`,
          overflow: "hidden",

          "& td": {
            paddingTop: 16,
            paddingBottom: 16,
            background: "transparent",
          },

          [theme.breakpoints.down("md")]: {
            minWidth: 1000,
          },
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: ({ theme }) => ({
          fontSize: 14,
          color: theme.colorSchemes.dark.palette.text.secondary,
          fontWeight: 600,
          background: theme.colorSchemes.dark.palette.background.paperLight,
        }),
        root: ({ theme }) => ({
          fontSize: 16,
          color: theme.colorSchemes.dark.palette.text.secondary,
          background: theme.colorSchemes.dark.palette.background.paper,
          borderBottom: "var(--border-100)",
          padding: "0.75rem 0.5rem",
        }),
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:last-child .MuiTableCell-body": {
            borderBottom: 0,
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: false
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.colorSchemes.dark.palette.background.paper,
          backgroundColor: theme.colorSchemes.dark.palette.neutral.main
        })
      }
    }
  },
});

export default theme;