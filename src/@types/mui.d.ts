import { PaletteColor, PaletteColorOptions, Theme } from "@mui/material/styles"
import { CssVarsTheme } from "@mui/material"

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme { }
}

declare module "@mui/material/styles" {
  interface Theme extends CssVarsTheme { }

  interface TypeBackground {
    paperLight: string
  }

  interface Palette {
    neutral: PaletteColor
    border: PaletteColor
  }

  interface PaletteOptions {
    neutral?: PaletteColorOptions
    border?: PaletteColorOptions
  }
}

declare module "@mui/material/Button" {
  interface ButtonClasses {
    containedNeutral: string
  }
  interface ButtonPropsColorOverrides {
    neutral: true
  }
}