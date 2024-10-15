import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import PendingTasks from 'src/features/pending-tasks/components/PendingTasks';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Blog - ${CONFIG.appName}`}</title>
      </Helmet>
      <PendingTasks />
    </>
  );
}
