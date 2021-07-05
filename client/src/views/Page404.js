import { motion } from "framer-motion";
import Link from "next/link";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Button, Typography, Container } from "@material-ui/core";
// components
import { MotionContainer, varBounceIn } from "../components/animate";
import Logo from "../components/Logo";
import Page from "../components/Page";
import { useRouter } from 'next/router';
import * as Multi from '../localize';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: "flex",
  minHeight: "100%",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: "100%",
  position: "absolute",
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up("sm")]: { padding: theme.spacing(5, 5, 0) },
}));

// ----------------------------------------------------------------------
export default function Page404() {
  const router = useRouter()
  const { locale, locales, defaultLocale, query } = router
  console.log(query);
  
  return (
    <RootStyle title="404 Page Not Found | Minimal-UI">
      <HeaderStyle>
        <Link href="/">
          <Logo />
        </Link>
      </HeaderStyle>
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
            <motion.div variants={varBounceIn}>
              <Typography variant="h3" gutterBottom>
                {Multi.multi[locale].sorryOpps}
              </Typography>
            </motion.div>
            <Typography sx={{ color: "text.secondary" }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps
              you’ve mistyped the URL? Be sure to check your spelling.
            </Typography>

            <Box
              component={motion.img}
              variants={varBounceIn}
              alt="404"
              src="/static/illustrations/illustration_404.svg"
              sx={{ width: "100%", maxHeight: 240, my: { xs: 5, sm: 10 } }}
            />

            <Link href="/">
              <Button size="large" variant="contained">
                Go to Home
              </Button>
            </Link>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
