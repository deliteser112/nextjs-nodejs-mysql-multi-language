// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Grid, Container, Typography, Switch } from "@material-ui/core";
// hooks
import useSettings from "../../hooks/useSettings";
//
import {
  varFadeInUp,
  MotionInView,
  varFadeInLeft,
  varFadeInRight,
} from "../animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(20, 0),
  backgroundColor: theme.palette.grey[900],
}));

const ContentStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    height: "100%",
    marginBottom: 0,
    textAlign: "left",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
}));

// ----------------------------------------------------------------------

export default function LandingDarkMode() {
  const { themeMode, toggleMode } = useSettings();
  const isLight = themeMode === "light";

  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          component="img"
          alt="image shape"
          src="/static/home/shape.svg"
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            my: "auto",
            position: "absolute",
            filter: "grayscale(1) opacity(48%)",
            display: { xs: "none", md: "block" },
          }}
        />

        <Grid container spacing={5} direction="row-reverse">
          <Grid item xs={12} md={4}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  gutterBottom
                  variant="overline"
                  sx={{ color: "text.disabled", display: "block" }}
                >
                  Easy switch between styles.
                </Typography>
              </MotionInView>

              <MotionInView
                variants={varFadeInUp}
                sx={{ color: "common.white" }}
              >
                <Typography variant="h2" paragraph>
                  Dark Mode
                </Typography>
              </MotionInView>

              <MotionInView
                variants={varFadeInUp}
                sx={{ color: "common.white", mb: 5 }}
              >
                <Typography>
                  A dark theme that feels easier on the eyes.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInRight}>
                <Switch onChange={toggleMode} checked={!isLight} />
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={8}>
            <MotionInView variants={varFadeInLeft}>
              <Box
                component="img"
                alt="theme mode"
                src={`/static/home/${isLight ? "light" : "dark"}mode.png`}
                sx={{
                  maxWidth: { md: "calc(100% - 48px)" },
                  transform: "translateZ(0)",
                  filter: "drop-shadow(-80px 80px 120px #000000)",
                }}
              />
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
