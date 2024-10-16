/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import TaskCard from 'src/common/TaskCard';

import { Tasks } from 'src/types/types';


// eslint-disable-next-line perfectionist/sort-imports
import { selectAllTasks } from '../add-task/taskSlice';



export default function PendingTasks() {
  const tasks = useSelector(selectAllTasks);

  const filteredPendingTasks = tasks.filter((task: Tasks) => task.status === 'Pending');

  if (filteredPendingTasks.length === 0) {
    return (
      <Grid>
        Please Mark Some Task Pending. <Link to="/">Go to List.</Link>
      </Grid>
    );
  }
  return (
    <Grid container sx={{ display: 'flex', justifyItems: 'center', justifyContent: 'center' }}>
      <TaskCard tasks={filteredPendingTasks} />
    </Grid>
  );
}
