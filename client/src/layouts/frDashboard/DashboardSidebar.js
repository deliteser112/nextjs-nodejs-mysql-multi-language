import PropTypes from "prop-types";
import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Box,
  Link,
  List,
  Avatar,
  Drawer,
  Hidden,
  Typography,
  ListSubheader,
} from "@material-ui/core";
// components
import Logo from "../../components/Logo";
import Scrollbars from "../../components/Scrollbars";
//
import MenuLinks from "./SidebarConfig";
import SidebarItem from "./SidebarItem";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  margin: theme.spacing(1, 2.5, 5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[500_12],
}));

// ----------------------------------------------------------------------

function reduceChild({ array, item, pathname, level }) {
  const key = item.href + level;

  if (item.items) {
    const match = pathname.includes(item.href);

    array = [
      ...array,
      <SidebarItem
        key={key}
        level={level}
        icon={item.icon}
        info={item.info}
        href={item.href}
        title={item.title}
        open={Boolean(match)}
      >
        {renderSidebarItems({
          pathname,
          level: level + 1,
          items: item.items,
        })}
      </SidebarItem>,
    ];
  } else {
    array = [
      ...array,
      <SidebarItem
        key={key}
        level={level}
        href={item.href}
        icon={item.icon}
        info={item.info}
        title={item.title}
      />,
    ];
  }
  return array;
}

function renderSidebarItems({ items, pathname, level = 0 }) {
  return (
    <List disablePadding>
      {items.reduce(
        (array, item) => reduceChild({ array, item, pathname, level }),
        []
      )}
    </List>
  );
}

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const router = useRouter();
  // router.push({ locale: 'fr' })
  const pathname = router.pathname;

  useEffect(() => {
    if (isOpenSidebar && onCloseSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbars>
      <Box sx={{ px: 2.5, py: 3 }}>
        <NextLink href="/" passHref>
          <Logo />
        </NextLink>
      </Box>

      <NextLink href="#" passHref>
        <Link underline="none" locale="fr">
          <AccountStyle>
            <Avatar
              alt="My Avatar"
              src="/static/mock-images/avatars/avatar_default.jpg"
            />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                Andreea
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                role
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </NextLink>

      {MenuLinks.map((list) => (
        <List
          disablePadding
          key={list.subheader}
          subheader={
            <ListSubheader
              disableSticky
              disableGutters
              sx={{
                mt: 3,
                mb: 2,
                pl: 5,
                color: "text.primary",
                typography: "overline",
              }}
            >
              {list.subheader}
            </ListSubheader>
          }
        >
          {renderSidebarItems({
            items: list.items,
            pathname,
          })}
        </List>
      ))}
    </Scrollbars>
  );

  return (
    <RootStyle>
      <Hidden lgUp>
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: { width: DRAWER_WIDTH, bgcolor: "background.default" },
          }}
        >
          {renderContent}
        </Drawer>
      </Hidden>
    </RootStyle>
  );
}
