import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import CompletedTasks from 'src/features/completed-tasks/CompletedTasks';


// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Blog - ${CONFIG.appName}`}</title>
      </Helmet>
      <CompletedTasks />
    </>
  );
}
