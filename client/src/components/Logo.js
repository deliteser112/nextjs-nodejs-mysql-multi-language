import { forwardRef } from "react";
// material
import { Box } from "@material-ui/core";

// ----------------------------------------------------------------------

const Logo = forwardRef(({ ...other }, ref) => {
  return (
    <Box
      component="img"
      alt="logo"
      src="/static/brand/logo_single.svg"
      height={40}
      {...other}
    />
  );
});

export default Logo;
