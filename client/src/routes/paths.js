// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = "";

// ----------------------------------------------------------------------

export const PATH_HOME = {
  cloud: "https://www.sketch.com/s/0fa4699d-a3ff-4cd5-a3a7-d851eb7e17f0",
  purchase: "https://material-ui.com/store/items/minimal-dashboard/",
  dashboard: ROOTS_DASHBOARD,
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    pageOne: path(ROOTS_DASHBOARD, "/one"),
    pageTwo: path(ROOTS_DASHBOARD, "/two"),
    pageThree: path(ROOTS_DASHBOARD, "/three"),
  },
  main: {
    root: path(ROOTS_DASHBOARD, "/main"),
    subpage1: path(ROOTS_DASHBOARD, "/main/subpage1"),
    subpage2: path(ROOTS_DASHBOARD, "/main/subpage2"),
  },
  drop: {
    root: path(ROOTS_DASHBOARD, "/drop"),
    pageFour: path(ROOTS_DASHBOARD, "/drop/four"),
    pageFive: path(ROOTS_DASHBOARD, "/drop/five"),
    pageSix: path(ROOTS_DASHBOARD, "/drop/six"),
  },
};
