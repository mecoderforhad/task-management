import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import { toggleTaskCompleted } from "src/features/add-task/taskSlice";

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Tasks } from 'src/types/types';

export default function TaskCard({tasks} : any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleToogleTask = (task: Tasks)=> {
    dispatch(toggleTaskCompleted(task.id));
    navigate("/completed-tasks")
  }

  return (
    <>
      {tasks.map((task: Tasks) => (
        <Grid key={task.id} item lg={3} sx={{ my: 2 }}>
          <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
            <Badge color= {task.status === "Completed" ? "success" : "secondary"} badgeContent={task.status}>
              <Card sx={{ maxWidth: 250 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {task.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {task.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/update-task/${task.id}`}>
                    <Button size="small">Edit</Button>
                  </Link>
                    {task.status === "Completed" ? "" : <Button size="small" onClick={()=> handleToogleTask(task)}>Complete</Button>}
                  <Button size="small" sx={{ color: 'red' }}>
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </Badge>
          </Stack>
        </Grid>
      ))}
    </>
  );
}
