import { Box } from "@material-ui/core";
//
import HomeNavbar from "./HomeNavbar";

// ----------------------------------------------------------------------

export default function HomeLayout({ children }) {
  return (
    <Box sx={{ height: "100%" }}>
      <HomeNavbar />
      <Box sx={{ height: "100%" }}>{children}</Box>
    </Box>
  );
}
