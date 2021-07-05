// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
// components
import Page from "../components/Page";
import {
  LandingHero,
  LandingFooter,
  LandingMinimal,
  LandingDarkMode,
  LandingAdvertisement,
  LandingCleanInterfaces,
  LandingHugePackElements,
} from "../components/landing-page";


// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  height: "100%",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle
      title="The starting point for your next project | Minimal-UI"
      id="move_top"
    >
      <LandingHero />
      <ContentStyle>
        <LandingMinimal />
        <LandingHugePackElements />
        <LandingDarkMode />
        <LandingCleanInterfaces />
        <LandingAdvertisement />
        <LandingFooter />
      </ContentStyle>
    </RootStyle>
  );
}
