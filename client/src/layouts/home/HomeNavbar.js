import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { useState, useRef } from "react";
import homeFill from "@iconify/icons-eva/home-fill";
import roundSpeed from "@iconify/icons-ic/round-speed";
import menu2Fill from "@iconify/icons-eva/menu-2-fill";
// material
import { alpha, experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Box,
  List,
  Link as MLink,
  Button,
  AppBar,
  Hidden,
  Toolbar,
  MenuItem,
  Container,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
// routes
import { PATH_HOME } from "../../routes/paths";
// hooks
import useOffSetTop from "../../hooks/useOffSetTop";
// components
import { MIconButton } from "../../components/@material-extend";
import Logo from "../../components/Logo";
import MenuPopover from "../../components/MenuPopover";

// ----------------------------------------------------------------------

const MENU_LINKS = [
  { title: "Home", icon: homeFill, href: "/" },
  { title: "Dashboard", icon: roundSpeed, href: PATH_HOME.dashboard },
];

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 96;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  "& .isDesktopActive": {
    color: `${theme.palette.primary.main} !important`,
  },
  "& .isMobileActive": {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("md")]: { height: APP_BAR_DESKTOP },
}));

const ToolbarShadowStyle = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: "auto",
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function HomeNavbar() {
  const router = useRouter();
  const anchorRef = useRef(null);
  const offset = useOffSetTop(100);
  const [openMenu, setOpenMenu] = useState(false);
  const isHome = router.pathname === "/";

  const renderMenuDesktop = (
    <>
      {MENU_LINKS.map((link) => (
        <Link key={link.title} href={link.href || ""} passHref>
          <MLink
            key={link.title}
            underline="none"
            variant="subtitle2"
            className={
              link.href === router.pathname ? "isDesktopActive" : undefined
            }
            sx={{
              mr: 5,
              color: "text.primary",
              transition: (theme) =>
                theme.transitions.create("opacity", {
                  duration: theme.transitions.duration.shortest,
                }),
              "&:hover": { opacity: 0.48 },
              ...(isHome && { color: "common.white" }),
              ...(offset && { color: "text.primary" }),
            }}
          >
            {link.title}
          </MLink>
        </Link>
      ))}
    </>
  );

  const renderMenuMobile = (
    <MenuPopover
      disablePortal
      open={openMenu}
      anchorEl={anchorRef.current}
      onClose={() => setOpenMenu(false)}
    >
      <List>
        {MENU_LINKS.map((link) => (
          <Link key={link.title} href={link.href} passHref>
            <MenuItem
              key={link.title}
              onClick={() => setOpenMenu(false)}
              sx={{ color: "text.secondary", py: 1 }}
              className={
                link.href === router.pathname ? "isMobileActive" : undefined
              }
            >
              <ListItemIcon>
                <Icon icon={link.icon} width={20} height={20} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ typography: "body2" }}>
                {link.title}
              </ListItemText>
            </MenuItem>
          </Link>
        ))}
      </List>
    </MenuPopover>
  );

  return (
    <RootStyle color="transparent">
      <ToolbarStyle
        disableGutters
        sx={{
          ...(offset && {
            bgcolor: "background.default",
            height: { md: APP_BAR_DESKTOP - 20 },
          }),
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" passHref>
            <Logo />
          </Link>
          <Box sx={{ flexGrow: 1 }} />

          <Hidden mdDown>{renderMenuDesktop}</Hidden>

          <Button variant="contained" target="_blank" href={PATH_HOME.purchase}>
            Purchase Now
          </Button>

          <Hidden mdUp>
            <MIconButton
              ref={anchorRef}
              onClick={() => setOpenMenu(true)}
              sx={{
                ml: 1,
                ...(isHome && { color: "common.white" }),
                ...(offset && { color: "text.primary" }),
              }}
            >
              <Icon icon={menu2Fill} />
            </MIconButton>
            {renderMenuMobile}
          </Hidden>
        </Container>
      </ToolbarStyle>

      {offset && <ToolbarShadowStyle />}
    </RootStyle>
  );
}
