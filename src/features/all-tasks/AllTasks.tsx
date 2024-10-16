// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useTheme } from '@mui/material/styles';
import { Grid, TextField, Typography } from '@mui/material';

import TaskCard from 'src/common/TaskCard';
import { selectAllTasks } from 'src/features/add-task/taskSlice';

// eslint-disable-next-line perfectionist/sort-imports
import { Link } from 'react-router-dom';

import useMediaQuery from '@mui/material/useMediaQuery';

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Tasks } from 'src/types/types';


export default function AllTasks() {
  const tasks = useSelector(selectAllTasks);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));

  console.log("matches", matches)

  // Filter tasks based on search status
  const filteredTasks = tasks.filter((task: Tasks) =>
    task.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
    task.status.toLowerCase().includes(searchStatus.toLowerCase())
  );

  if (tasks.length === 0) {
    return (
      <Grid>
        <Typography>Please Add Some Task. <Link to="/add-task">Add a New Task.</Link></Typography>
      </Grid>
    );
  }

  return (
    <Grid container>
      <Grid item lg={2.5} md={12} sm={12} xs={12} sx={{my: 1, mx: 1}}>
        <TextField
          label="Search by Title"
          variant="outlined"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </Grid>

      <Grid item lg={2.5} md={12} sm={12} xs={12} sx={{my: 1, mx: 1}}>
        <TextField
          label="Search by Status"
          variant="outlined"
          value={searchStatus}
          onChange={(e) => setSearchStatus(e.target.value)}
        />
      </Grid>

      <Grid item lg={12}>
        {filteredTasks.length === 0 ? (
          <Typography sx={{my: 3, mx: 1}}>No tasks found with the given status.</Typography>
        ) : (
          <Grid container sx={{ display: 'flex', justifyItems: 'center', justifyContent: "flex-start", width: matches ? "auto" :"1200px"}}>
            <TaskCard tasks={filteredTasks} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
