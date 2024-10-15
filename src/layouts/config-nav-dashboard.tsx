import ListIcon from '@mui/icons-material/List';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';

export const navData = [
  {
    title: 'Task List',
    path: '/',
    icon: <ListIcon />,
  },
  {
    title: 'Add Task',
    path: '/add-task',
    icon: <AddIcon />,
  },
  {
    title: 'Pending Tasks',
    path: '/pending-tasks',
    icon: <MoreHorizIcon />,
  },
  {
    title: 'Completed Tasks',
    path: '/completed-tasks',
    icon: <ChecklistOutlinedIcon />,
  },
];
