/* eslint-disable import/no-extraneous-dependencies */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from 'react-hook-form';

import { Box, Grid, Button, TextField, Typography } from '@mui/material';

import { addTask } from "../taskSlice";


const AddTaskForm = () => {
  const dispatch = useDispatch();
  const methods = useForm();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data: any) => {
    dispatch(addTask(data));
    navigate("/")
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
              <Typography variant="h4">Add New Task</Typography>
            </Grid>

            <Grid item lg={6} md={12} sm={12} xs={7} sx={{ m: 1 }}>
              <TextField
                label="Title"
                variant="outlined"
                size="small"
                sx={{ width: '100%' }}
                {...register('title', {
                  required: 'Title is required',
                  maxLength: {
                    value: 100,
                    message: 'Title must be 100 characters or less'
                  }
                })}
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
                {...register('description', {
                  required: 'Description is required',
                  maxLength: {
                    value: 255,
                    message: 'Description must be 255 characters or less'
                  }
                })}
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
                Add
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </FormProvider>
  );
};

export default AddTaskForm;
