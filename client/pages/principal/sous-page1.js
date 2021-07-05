// layouts
import DashboardLayout from "src/layouts/dashboard";
import ESDashboardLayout from "src/layouts/esDashboard";
import FRDashboardLayout from "src/layouts/frDashboard";
// views
import PageOne from "src/views/PageOne";
import { useRouter } from 'next/router';


// ----------------------------------------------------------------------

export default function One() {
  const router = useRouter()
  const { locale, locales, defaultLocale, query } = router;
  return (
    <>
      {locale==="en" &&<DashboardLayout>
        <PageOne />
      </DashboardLayout>}
      {locale==="fr" &&<FRDashboardLayout>
        <PageOne />
      </FRDashboardLayout>}
      {locale==="es" &&<ESDashboardLayout>
        <PageOne />
      </ESDashboardLayout>}
    </>
  );
}
