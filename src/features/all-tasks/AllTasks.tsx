// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import TaskCard from 'src/common/TaskCard';
import { selectAllTasks } from 'src/features/add-task/taskSlice';

import { Link } from 'react-router-dom';

export default function AllTasks() {
  const tasks = useSelector(selectAllTasks);

  if (tasks.length === 0) {
    return (
      <Grid>
        Please Add Some Task. <Link to="/add-task">Add Task.</Link>
      </Grid>
    );
  }
  return (
    <Grid container sx={{ display: 'flex', justifyItems: 'center', justifyContent: 'center' }}>
      <TaskCard tasks={tasks} />
    </Grid>
  );
}
