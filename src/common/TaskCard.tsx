import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import { Tasks } from 'src/types/types';

export default function TaskCard({ tasks }: Tasks) {

  return (
    <>
      {tasks.map((task: Tasks) => (
        <Grid key={task.id} item lg={3} sx={{my: 2}}>
             <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
             <Badge color="secondary" badgeContent={task.status}>
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
              <Button size="small">Update</Button>
              <Button size="small">Complete</Button>
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
