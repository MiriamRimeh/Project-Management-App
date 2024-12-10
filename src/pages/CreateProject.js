/* import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CalendarPicker from '@mui/lab/CalendarPicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const CreateNewProject = () => {
  const [projectName, setProjectName] = useState('');
  const [projectKey, setProjectKey] = useState('');
  const [client, setClient] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [beginDate, setBeginDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hourlyPayment, setHourlyPayment] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a backend API
    console.log({
      projectName,
      projectKey,
      client,
      description,
      status,
      beginDate,
      endDate,
      hourlyPayment,
      assignee,
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" component="h2" gutterBottom>
        Create New Project
      </Typography>
      <TextField
        label="Project Name"
        variant="outlined"
        fullWidth
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <TextField
        label="Project Key"
        variant="outlined"
        fullWidth
        value={projectKey}
        onChange={(e) => setProjectKey(e.target.value)}
      />
      <FormControl fullWidth>
        <InputLabel id="client-label">Client</InputLabel>
        <Select
          labelId="client-label"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        >
          
          <MenuItem value=""><em>Select Client</em></MenuItem>
          <MenuItem value="Client A">Client A</MenuItem>
          <MenuItem value="Client B">Client B</MenuItem>
        </Select>
      </FormControl>
      <TextareaAutosize
        label="Description"
        placeholder="Enter description"
        fullWidth
        multiline
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      ... other fields like status, begin date, end date, hourly payment, assignee
      <Button variant="contained" type="submit">
        Create
      </Button>
    </Box>
  );
};

export default CreateNewProject; */