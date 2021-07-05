import React from "react";
import { Link as RouterLink } from "next/link";
// material
import {
  alpha,
  useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
//
import { varFadeInUp, MotionInView, varFadeInRight } from "../animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(15, 0),
  backgroundImage:
    theme.palette.mode === "light"
      ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${
          theme.palette.grey[300]
        } 100%)`
      : "none",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 520,
  margin: "auto",
  textAlign: "center",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    height: "100%",
    marginBottom: 0,
    textAlign: "left",
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingRight: theme.spacing(5),
  },
}));

const ScreenStyle = styled(MotionInView)(({ theme }) => ({
  bottom: 0,
  maxWidth: 460,
  position: "absolute",
}));

const variantScreenLeftMoblie = {
  initial: { x: "22%", y: -10, opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1 },
};
const variantScreenRightMobile = {
  initial: { x: "26%", y: -30, opacity: 0 },
  animate: { x: "48%", y: -40, opacity: 1 },
};
const variantScreenLeft = {
  initial: { x: "30%", y: -30, opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1 },
};
const variantScreenCenter = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};
const variantScreenRight = {
  initial: { x: "34%", y: -50, opacity: 0 },
  animate: { x: "64%", y: -80, opacity: 1 },
};

// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const isRTL = theme.direction === "rtl";
  const upSm = useMediaQuery(theme.breakpoints.up("sm"));
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const textAnimate = upMd ? varFadeInRight : varFadeInUp;
  const screenLeftAnimate = upSm ? variantScreenLeft : variantScreenLeftMoblie;
  const screenCenterAnimate = variantScreenCenter;
  const screenRightAnimate = upSm
    ? variantScreenRight
    : variantScreenRightMobile;

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4} lg={5}>
            <ContentStyle>
              <MotionInView variants={textAnimate}>
                <Typography
                  gutterBottom
                  variant="overline"
                  sx={{ color: "text.secondary", display: "block" }}
                >
                  Interface Starter Kit
                </Typography>
              </MotionInView>

              <MotionInView variants={textAnimate}>
                <Typography variant="h2" paragraph>
                  Huge Pack of Elements
                </Typography>
              </MotionInView>

              <MotionInView variants={textAnimate}>
                <Typography sx={{ color: "text.secondary" }}>
                  We collected most popular elements. Menu, sliders, buttons,
                  inputs etc. are all here. Just dive in!
                </Typography>
              </MotionInView>

              <MotionInView variants={textAnimate} sx={{ mt: 5 }}>
                <Button size="large" color="inherit" variant="outlined">
                  View All Components
                </Button>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid
            dir="ltr"
            item
            xs={12}
            md={8}
            lg={7}
            sx={{
              position: "relative",
              pl: { sm: "16% !important", md: "0 !important" },
            }}
          >
            {[...Array(3)].map((screen, index) => (
              <ScreenStyle
                key={index}
                threshold={0.72}
                variants={{
                  ...(index === 0 && screenLeftAnimate),
                  ...(index === 1 && screenCenterAnimate),
                  ...(index === 2 && screenRightAnimate),
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                sx={{
                  ...(index === 0 && { zIndex: 3 }),
                  ...(index === 2 && { zIndex: 1 }),
                  ...(index === 1 && {
                    position: "relative",
                    zIndex: 2,
                    bottom: { xs: 20, sm: 40 },
                    transform: {
                      xs: isRTL ? "translateX(-24%)" : "translateX(24%)",
                      sm: isRTL ? "translateX(-32%)" : "translateX(32%)",
                    },
                  }),
                }}
              >
                <Box
                  component="img"
                  alt={`screen ${index + 1}`}
                  src={`/static/home/screen_${isLight ? "light" : "dark"}_${
                    index + 1
                  }.png`}
                  sx={{ width: { xs: "80%", sm: "100%" } }}
                />
              </ScreenStyle>
            ))}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
