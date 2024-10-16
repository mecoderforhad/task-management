/* eslint-disable import/no-extraneous-dependencies */
import { useDispatch, useSelector } from "react-redux";
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate, useParams } from "react-router-dom";

import { Box, Grid, Button, TextField, Typography } from '@mui/material';

import { updateTask } from "../taskSlice";

const UpdateTaskForm = () => {
  const { id } = useParams(); // Get task ID from URL params
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch the current task by ID from the state
  const task = useSelector((state: any) => state.tasks.find((task: any) => task.id === id));

  const methods = useForm({
    defaultValues: {
      title: task?.title || '',
      description: task?.description || '',
      startDate: task?.startDate || '',
      endDate: task?.endDate || '',
    }
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data: any) => {
    dispatch(updateTask({ id, ...data }));  // Dispatch update with task ID
    navigate("/");
  };

  const validateEndDate = (endDate: string) => {
    const startDate = methods.getValues('startDate');
    return new Date(endDate) >= new Date(startDate) || 'End Date must be after Start Date';
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid item lg={6} md={12} sm={12} xs={7} sx={{ m: 1 }}>
              <Typography variant="h4">Update Task</Typography>
            </Grid>

            <Grid item lg={6} md={12} sm={12} xs={7} sx={{ m: 1 }}>
              <TextField
                label="Title"
                variant="outlined"
                size="small"
                sx={{ width: '100%' }}
                {...register('title', { required: 'Title is required' })}
                error={!!errors.title}
                helperText={errors.title?.message?.toString()}
              />
            </Grid>

            <Grid item lg={6} md={12} sm={12} xs={7} sx={{ m: 1 }}>
              <TextField
                label="Description"
                multiline
                rows={4}
                sx={{ width: '100%' }}
                {...register('description', { required: 'Description is required' })}
                error={!!errors.description}
                helperText={errors.description?.message?.toString()}
              />
            </Grid>

            <Grid
              container
              item
              lg={6}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "5px", my: 1}}
            >
              <Grid item lg={5.9} md={12} sm={12} xs={7}>
                <TextField
                  id="start-date"
                  label="Start Date"
                  type="date"
                  sx={{ width: '100%' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...register('startDate', { required: 'Start Date is required' })}
                  error={!!errors.startDate}
                  helperText={errors.startDate?.message?.toString()}
                />
              </Grid>

              <Grid item lg={5.9} md={12} sm={12} xs={7}>
                <TextField
                  id="end-date"
                  label="End Date"
                  type="date"
                  sx={{ width: '100%' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...register('endDate', {
                    required: 'End Date is required',
                    validate: validateEndDate,
                  })}
                  error={!!errors.endDate}
                  helperText={errors.endDate?.message?.toString()}
                />
              </Grid>
            </Grid>

            <Grid item lg={6} md={12} sm={12} xs={7} sx={{ m: 1 }}>
              <Button type="submit" variant="contained" sx={{ width: '100%' }}>
                Update
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </FormProvider>
  );
};

export default UpdateTaskForm;
