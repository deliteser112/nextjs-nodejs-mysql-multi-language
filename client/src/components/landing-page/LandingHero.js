import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import flashFill from "@iconify/icons-eva/flash-fill";
import Link from "next/link";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Button,
  Box,
  Container,
  Typography,
  Link as MLink,
} from "@material-ui/core";
// routes
import { PATH_HOME, PATH_DASHBOARD } from "../../routes/paths";

//
import {
  varFadeIn,
  varWrapEnter,
  varFadeInUp,
  varFadeInRight,
} from "../animate";

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#F2F3F5",
  [theme.breakpoints.up("md")]: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    position: "fixed",
    alignItems: "center",
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: "auto",
  textAlign: "center",
  position: "relative",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up("md")]: {
    margin: "unset",
    textAlign: "left",
  },
}));

const HeroOverlayStyle = styled(motion.img)(({ theme }) => ({
  zIndex: 9,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
}));

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: "100%",
  margin: "auto",
  position: "absolute",
  [theme.breakpoints.up("lg")]: {
    right: "8%",
    width: "auto",
    height: "72vh",
  },
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroOverlayStyle
          alt="overlay"
          src="/static/home/overlay.svg"
          variants={varFadeIn}
        />

        <HeroImgStyle
          alt="hero"
          src="/static/home/hero.png"
          variants={varFadeInUp}
        />

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h1" sx={{ color: "common.white" }}>
                Start a <br />
                New Project <br /> with
                <Typography
                  component="span"
                  variant="h1"
                  sx={{ color: "primary.main" }}
                >
                  &nbsp;Minimal
                </Typography>
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography sx={{ py: 5, color: "common.white" }}>
                The starting point for your next project based on
                easy-to-customize Material-UI © helps you build apps faster and
                better.
              </Typography>
            </motion.div>

            <Box
              component={motion.div}
              variants={varFadeInRight}
              sx={{
                mb: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Box
                component="img"
                alt="sketch icon"
                src="/static/icons/ic_sketch.svg"
                sx={{ mr: 1, width: 20, height: 20 }}
              />
              <MLink
                underline="always"
                href={PATH_HOME.cloud}
                target="_blank"
                sx={{ color: "common.white" }}
              >
                Preview in Sketch Cloud
              </MLink>
            </Box>

            <motion.div variants={varFadeInRight}>
              <Link href={PATH_DASHBOARD.root}>
                <Button
                  size="large"
                  variant="contained"
                  startIcon={<Icon icon={flashFill} width={20} height={20} />}
                >
                  Live Preview
                </Button>
              </Link>
            </motion.div>

            <Box
              sx={{
                mt: 5,
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                "& > :not(:last-of-type)": { mr: 1.5 },
              }}
            >
              <motion.img
                variants={varFadeInRight}
                src="/static/icons/ic_m_sketch.svg"
              />
              <motion.img
                variants={varFadeInRight}
                src="/static/icons/ic_m_figma.svg"
              />
              <motion.img
                variants={varFadeInRight}
                src="/static/icons/ic_m_material.svg"
              />
              <motion.img
                variants={varFadeInRight}
                src="/static/icons/ic_m_react.svg"
              />
              <motion.img
                variants={varFadeInRight}
                src="/static/icons/ic_m_js.svg"
              />
              <motion.img
                variants={varFadeInRight}
                src="/static/icons/ic_m_ts.svg"
              />
            </Box>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: "100vh" } }} />
    </>
  );
}
