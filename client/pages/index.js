// layouts
import React from 'react';
import DashboardLayout from "src/layouts/dashboard";
import ESDashboardLayout from "src/layouts/esDashboard";
import FRDashboardLayout from "src/layouts/frDashboard";
// views
import PageOne from "src/views/PageOne";
import Router, { useRouter } from 'next/router';
import * as Multi from '../src/localize';


// ----------------------------------------------------------------------

export default function One() {
  const router = useRouter()
  const { locale, locales, defaultLocale, query } = router;
  console.log(locale);
  React.useEffect(()=> {
    const main = Multi.multi[locale].main;
    Router.push('/'+main)
  },[])
  return (
    <>
      {/* {locale==="en" &&<DashboardLayout>
        <PageOne />
      </DashboardLayout>}
      {locale==="fr" &&<FRDashboardLayout>
        <PageOne />
      </FRDashboardLayout>}
      {locale==="es" &&<ESDashboardLayout>
        <PageOne />
      </ESDashboardLayout>} */}
    </>
  );
}
