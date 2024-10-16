// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Grid, TextField, Typography } from '@mui/material';

import TaskCard from 'src/common/TaskCard';
import { selectAllTasks } from 'src/features/add-task/taskSlice';

// eslint-disable-next-line perfectionist/sort-imports
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Tasks } from 'src/types/types';

export default function AllTasks() {
  const tasks = useSelector(selectAllTasks);
  const [searchStatus, setSearchStatus] = useState('');

  // Filter tasks based on search status
  const filteredTasks = tasks.filter((task: Tasks) =>
    task.status.toLowerCase().includes(searchStatus.toLowerCase())
  );

  if (tasks.length === 0) {
    return (
      <Grid>
        <Typography>Please Add Some Task.</Typography>
        <Link to="/add-task">Add a new task.</Link>
      </Grid>
    );
  }

  return (
    <Grid container direction="column" sx={{my: 2}}>
      <Grid item>
        <TextField
          label="Search by Status"
          variant="outlined"
          value={searchStatus}
          onChange={(e) => setSearchStatus(e.target.value)}
        />
      </Grid>

      <Grid item>
        {filteredTasks.length === 0 ? (
          <Typography>No tasks found with the given status.</Typography>
        ) : (
          <Grid container sx={{ display: 'flex', justifyItems: 'center', justifyContent: "flex-start" }}>
            <TaskCard tasks={filteredTasks} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
