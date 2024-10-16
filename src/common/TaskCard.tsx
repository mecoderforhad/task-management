import { useState } from "react";
import { useDispatch } from "react-redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { differenceInDays } from 'date-fns';
import { Link, useNavigate } from "react-router-dom";

import Card from '@mui/material/Card';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid, Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import { truncateDescription } from "src/utils/word-format";

import { removeTask, toggleTaskCompleted } from "src/features/add-task/taskSlice";

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Tasks } from 'src/types/types';

import DeleteConfirmationModal from "./DeleteConfirmationModal";

export default function TaskCard({ tasks }: any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteEntry, setDeleteEntry] = useState("");
  const [open, setOpen] = useState(false);

  const handleToogleTask = (task: Tasks) => {
    dispatch(toggleTaskCompleted(task.id));
    navigate("/completed-tasks");
  };

  const handleDeleteClick = (singleTask: string) => {
    setOpen(true);
    setDeleteEntry(singleTask);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmDelete = () => {
    dispatch(removeTask(deleteEntry));
    setOpen(false);
  };

  return (
    <>
      {tasks.map((task: Tasks) => {
        const startDate = new Date(task.startDate);
        const endDate = new Date(task.endDate);
        const dueDays = differenceInDays(endDate, startDate); // Calculate due days

        return (
          <Grid key={task.id} item lg={2.8} md={12} sm={12} xs={12} sx={{ my: 3 }}>
            <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
              <Badge
                color={task.status === 'Completed' ? 'success' : 'secondary'}
                badgeContent={task.status}
              >
                <Card sx={{ width: '250px' }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {task.title}
                    </Typography>
                    <Tooltip title={task.description} arrow>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {truncateDescription(task.description, 5)}
                      </Typography>
                    </Tooltip>
                    {/* Displaying start date, end date, and due days with smaller font */}
                    <Typography variant="body2" sx={{ color: task.status === 'Completed' ? 'success.main' : 'text.secondary', fontSize: '0.675rem',my: 1 }}>
                      {task.status !== 'Completed' ? `Due date: ${dueDays} day${dueDays !== 1 ? 's' : ''}` : "Task Completed"}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to={`/update-task/${task.id}`}>
                      <Button size="small">Edit</Button>
                    </Link>
                    {task.status !== 'Completed' && (
                      <Button size="small" onClick={() => handleToogleTask(task)}>
                        Complete
                      </Button>
                    )}
                    <Button size="small" sx={{ color: 'red' }} onClick={() => handleDeleteClick(task.id)}>
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Badge>
            </Stack>
          </Grid>
        );
      })}
      <DeleteConfirmationModal
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}
