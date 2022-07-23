import React, {useState} from 'react'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import Header from '../others/Header';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Assessment_Table from './Assessment_Table';
function View_Semester_Grade() {
  const [expand, setExpand] = useState(false);
  const [department, setDepartment] = useState();
  const [lm, setLm] = useState();
  const [program, setProgram] = useState();
  const handleProgram = (event) => {
    setProgram(event.target.value);
  }
  const handleDepartment = (event) => {
    setDepartment(event.target.value);
  }
  const handleLearningModality = (event) => {
    setLm(event.target.value);
  }
  const handleExpand = (event) => {
    if (!expand) {
      setExpand(true);
    }
    else {
      setExpand(false);
    }
    
    }
    
    const [type, setType] = useState();
    const handleType = (event) => {
        setType(event.target.value)
    }

  return (
    <div >
    <Header/>
      <Grid container spacing={2} style={{ marginTop: '50px' }}>
        
        {/* <Grid item xs={4} md={3} sm={4}>
                <FormControl  style={{ float:'left', marginLeft:'80px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Attendance Year</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={lm}
                            label="Learning Modality"
                            onChange={handleLearningModality}
                        >
                        <MenuItem value={'1'}>1</MenuItem>
                        <MenuItem value={'2'}>2</MenuItem>
                        <MenuItem value={'3'}>3</MenuItem>
                        <MenuItem value={'4'}>4</MenuItem>
                        <MenuItem value={'5'}>5</MenuItem>
                    </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} md={3} sm={4}>
                <FormControl  style={{ float:'left', marginLeft:'80px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Semester</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={program}
                            label="Program"
                            onChange={handleProgram}
                        >
                            <MenuItem value={'1'}>1</MenuItem>
                        <MenuItem value={'2'}>2</MenuItem>
                        <MenuItem value={'3'}>3</MenuItem>
                            
                    </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} md={3} sm={4}>
                <FormControl  style={{ float:'left', marginLeft:'80px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Student_id</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={department}
                            label="Department"
                            onChange={handleDepartment}
                        >
                            <MenuItem value={'Sweng'}>Software Engineering</MenuItem>
                            <MenuItem value={'Eleng'}>Electriacal Engineering</MenuItem>
                            <MenuItem value={'Ceng'}>Civil Engineering</MenuItem>
                            
                    </Select>
          </FormControl>
        </Grid> 
              <Grid item xs={2} md={2} sm={2}>
                  <Button variant="contained" color='primary' style={{ width: '100px'}}>Search</Button>
        </Grid>
        */}
              <Grid item xs={12} md={12} sm={12}>
                  <center>
                    <Semes />
                  </center>
               </Grid>
           </Grid>   
    </div>
  )
}

export default View_Semester_Grade