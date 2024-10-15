
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import { selectAllTasks } from 'src/features/add-task/taskSlice';


export default function AllTasks() {
  const tasks = useSelector(selectAllTasks);

  console.log("tasks", tasks)

  return <Box>this is All Task.</Box>;
}
