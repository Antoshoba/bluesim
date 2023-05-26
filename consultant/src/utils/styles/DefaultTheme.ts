import type {} from "@mui/material/themeCssVarsAugmentation";
import type {} from "@mui/x-date-pickers/themeAugmentation";

import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import Fonts from "@j2w/shared-frontend/utils/styles/Fonts";
import { createTheme } from "@mui/material";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body3: CSSProperties;
    label: CSSProperties;
  }
  interface TypographyVariantsOptions {
    body3?: CSSProperties;
    label: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    label: true;
  }
}

const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: Colors.PRIMARY,
      light: Colors.PRIMARY_LIGHT,
    },
    secondary: {
      main: Colors.SECONDARY,
    },
    background: {
      default: Colors.MAIN_BACKGROUND,
      paper: Colors.MAIN_BACKGROUND,
    },
    text: {
      primary: Colors.PRIMARY,
      secondary: Colors.PRIMARY_LIGHT,
    },
    success: {
      main: Colors.SUCCESS,
    },
    error: {
      main: Colors.ERROR,
    },
  },
  typography: {
    fontSize: 16,
    h3: {
      fontWeight: 500,
      fontSize: "1.875rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: "2rem",
    },
    h6: {
      fontSize: "1.125rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
    body3: {
      fontSize: "0.75rem",
    },
    label: {
      fontSize: "0.875rem",
      fontWeight: "600",
    },
    subtitle1: {
      fontSize: "0.9375rem",
    },
    subtitle2: {
      fontSize: "0.6875rem",
    },
    fontFamily: "inherit",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: Colors.PRIMARY,
          fontFamily: Fonts.Poppins,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "inherit",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 6,
          fontSize: "1rem",
          lineHeight: "1.2rem",
        },
        outlinedPrimary: {
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
          },
        },
        sizeLarge: {
          padding: "12px 30px",
        },
        sizeMedium: {
          padding: "10px 28px",
        },
        sizeSmall: {
          fontSize: "0.8rem",
          padding: "8px 13px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.MuiInputBase-multiline": {
            padding: 0,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            boxShadow: `0px 4px 4px ${Colors.SHADOW}`,
          },
        },
        input: {
          padding: 14,
        },
        sizeSmall: {
          "& .MuiInputBase-inputSizeSmall": {
            padding: "6px 14px",
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          background: Colors.WHITE,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        colorPrimary: {
          color: Colors.PRIMARY,
        },
        root: {
          ".MuiSvgIcon-fontSizeSmall": {
            fontSize: "1.28rem",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginBottom: 0,
        },
      },
    },
  },
});

export default DefaultTheme;
