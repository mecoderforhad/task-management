import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import AllTasks from 'src/features/all-tasks/components/AllTasks';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Blog - ${CONFIG.appName}`}</title>
      </Helmet>
      <AllTasks />
    </>
  );
}
