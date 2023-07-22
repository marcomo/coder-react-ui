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
  spacing: (factor: number) => `${factor}rem`,
  shape: {
    borderRadius: 4
  },
  colorSchemes: {
    dark: {
      palette: {
        action: {
          active: "var(--color-emphasis)",
          activatedOpacity: .7
        },
        neutral: {
          light: "var(--color-ink-100)",
          main: "var(--color-ink-200)"
        },
        background: {
          default: "var(--color-paper-100)",
          paper: "var(--color-paper-200)",
          paperLight: "var(--color-paper-300)",
        },
        border: {
          main: "var(--border-100)"
        },
        text: {
          primary: "var(--color-ink-100)",
          secondary: "var(--color-ink-200)"
        },
        Button: {
          inheritContainedBg: "var(--color-emphasis)"
        },
        AppBar: {
          defaultBg: "var(--color-paper-200)",
        }
      }
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "outlined"
      },
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
          color: theme.vars.palette.text.primary,
          borderRadius: theme.vars.shape.borderRadius,
          borderColor: theme.vars.palette.neutral.main,
          fontWeight: 400,
          fontSize: "1rem",
          display: "flex",
        }),
        contained: ({ theme }) => ({
          backgroundColor: theme.vars.palette.Button.inheritContainedBg,
        }),
        containedNeutral: ({ theme }) => ({
          marginTop: 0,
          marginBottom: 0,
          borderRadius: 0,
          color: theme.vars.palette.neutral.main,
          backgroundColor: "transparent",
          "&.active, &:hover": {
            backgroundColor: theme.vars.palette.background.paperLight,
            color: theme.vars.palette.neutral.light,
          },
        }),
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.action.active,
          "&:hover": {
            textDecoration: "underline"
          }
        })
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          spacing: 0,
          borderBottom: theme.vars.palette.border.main
        })
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "0.5rem",
          border: theme.vars.palette.border.main
        }),
      },
    },
    MuiTable: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderCollapse: "unset",
          border: "none",
          background: theme.vars.palette.background.paper,
          boxShadow: `0 0 0 1px ${theme.vars.palette.background.default} inset`,
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: ({ theme }) => ({
          fontSize: 14,
          background: theme.vars.palette.background.paperLight,
          color: theme.vars.palette.text.secondary,
          fontWeight: 600
        }),
        root: ({ theme }) => ({
          fontSize: 16,
          color: theme.vars.palette.text.secondary,
          borderBottom: theme.vars.palette.border.main,
          padding: theme.spacing(.75, 0.5),
        }),
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.vars.palette.background.paper,
          "&:last-child .MuiTableCell-body": {
            borderBottom: 0,
          },
          "&.Mui-selected .MuiTableCell-body": {
            color: theme.vars.palette.text.primary,
            backgroundColor: theme.vars.palette.action.active
          },
          "&.MuiTableRow-hover:hover": {
            backgroundColor: theme.vars.palette.background.default,
          }
        }),
      }
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: false
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.background.paper,
          backgroundColor: theme.vars.palette.neutral.main
        })
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.neutral.light,
          background: theme.vars.palette.background.paper,
        })
      }
    },
    MuiScopedCssBaseline: {
      styleOverrides: {
        root: {
          flex: 1,
          backgroundColor: "transparent"
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(2, 4)
        })
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(2, 4)
        })
      }
    }
  },
});

export default theme;