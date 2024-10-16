import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import TaskCard from 'src/common/TaskCard';
import { selectAllTasks } from 'src/features/add-task/taskSlice';

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Tasks } from 'src/types/types';

export default function CompletedTasks() {
  const tasks = useSelector(selectAllTasks);

  const filteredCompletedTasks = tasks.filter((task: Tasks) => task.status === 'Completed');

  console.log("filteredCompletedTasks", filteredCompletedTasks)

  if (filteredCompletedTasks.length === 0) {
    return (
      <Grid>
        Please Mark Some Task Completed. <Link to="/">Go to List.</Link>
      </Grid>
    );
  }
  return (
    <Grid container sx={{ display: 'flex', justifyItems: 'center', justifyContent: 'center' }}>
      <TaskCard tasks={filteredCompletedTasks} />
    </Grid>
  );
}
