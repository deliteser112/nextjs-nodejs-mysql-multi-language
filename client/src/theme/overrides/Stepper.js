// ----------------------------------------------------------------------

export default function Stepper(theme) {
  return {
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: theme.palette.divider
        }
      }
    },
    MuiStepContent: {
      styleOverrides: {
        root: {
          borderColor: theme.palette.divider
        }
      }
    }
  };
}
