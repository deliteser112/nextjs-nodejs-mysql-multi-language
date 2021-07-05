// ----------------------------------------------------------------------

export default function Radio(theme) {
  return {
    MuiRadio: {
      defaultProps: {
        color: 'primary'
      },

      styleOverrides: {
        root: {
          padding: theme.spacing(1)
        }
      }
    }
  };
}
