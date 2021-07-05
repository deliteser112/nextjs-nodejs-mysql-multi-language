// routes
import { PATH_DASHBOARD } from "src/routes/paths";
// components
import SvgIconStyle from "../../components/SvgIconStyle";
import { useRouter } from 'next/router';
// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle
    src={`/static/icons/navbar/${name}.svg`}
    sx={{ width: 22, height: 22 }}
  />
);

const ICONS = {
  page: getIcon("ic_page"),
  dashboard: getIcon("ic_dashboard"),
};

const sidebarConfig = [
  // GENERAL
  

  // APP
  // ----------------------------------------------------------------------
  {
    subheader: "app",
    items: [
      {
        // FOUNDATIONS
        // ----------------------------------------------------------------------
        title: "Main",
        href: "/main",
        icon: ICONS.dashboard,
        items: [
          {
            title: "Sub Page 1",
            href: PATH_DASHBOARD.main.subpage1,
          },
          {
            title: "Sub Page 2",
            href: PATH_DASHBOARD.main.subpage2,
          },
        ],
      }
    ],
  }
];

export default sidebarConfig;
