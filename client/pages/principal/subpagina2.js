// layouts
import DashboardLayout from "src/layouts/dashboard";
import ESDashboardLayout from "src/layouts/esDashboard";
import FRDashboardLayout from "src/layouts/frDashboard";
// views
import PageTwo from "src/views/PageTwo";
import { useRouter } from 'next/router';


// ----------------------------------------------------------------------

export default function One() {
  const router = useRouter()
  const { locale, locales, defaultLocale, query } = router;
  return (
    <>
      {locale==="en" &&<DashboardLayout>
        <PageTwo />
      </DashboardLayout>}
      {locale==="fr" &&<FRDashboardLayout>
        <PageTwo />
      </FRDashboardLayout>}
      {locale==="es" &&<ESDashboardLayout>
        <PageTwo />
      </ESDashboardLayout>}
    </>
  );
}
