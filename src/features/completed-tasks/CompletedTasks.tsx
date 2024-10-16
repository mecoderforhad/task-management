import { useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import TaskCard from 'src/common/TaskCard';
import { selectAllTasks } from 'src/features/add-task/taskSlice';

import { Tasks } from 'src/types/types';

import { Link } from 'react-router-dom';

export default function CompletedTasks() {
  const tasks = useSelector(selectAllTasks);

  const filteredCompletedTasks = tasks.filter((task: Tasks) => task.status === 'completed');

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
