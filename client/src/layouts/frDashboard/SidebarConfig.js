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
        title: "Principale",
        href: "/principal",
        icon: ICONS.dashboard,
        items: [
          {
            title: "Sous-page 1",
            href: '/principal/sous-page1',
          },
          {
            title: "Sous-page 2",
            href: '/principal/sous-page2',
          },
        ],
      },
    ],
  },
];

export default sidebarConfig;
