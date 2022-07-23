import React, {useState} from 'react'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import Header from '../others/Header';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Course_Breakdown_Table from '../course_breakdown/Course_Breakdown_Table';
import Course_Offering_Table from './Course_Offering_Table';
function View_Course_Offering() {
  const [expand, setExpand] = useState(false);
  const [accademic_year, setAccademic_Year] = useState();
  const [attendance_year, setAttendance_year] = useState();
  const [program, setProgram] = useState();
  const handleProgram = (event) => {
    setProgram(event.target.value);
  }
  const handleAccademic_Year = (event) => {
    setAccademic_Year(event.target.value);
  }
  const handleLearningModality = (event) => {
    setAttendance_year(event.target.value);
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
                    <InputLabel id="demo-simple-select-label">Accademic_Year</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={accademic_year}
                            label="Accademic_Year"
                            onChange={handleAccademic_Year}
                        >
                            <MenuItem value={'Sweng'}>Software Engineering</MenuItem>
                            <MenuItem value={'Eleng'}>Electriacal Engineering</MenuItem>
                            <MenuItem value={'Ceng'}>Civil Engineering</MenuItem>
                            
                    </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} md={3} sm={4}>
                <FormControl  style={{ float:'left', marginLeft:'80px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Attendance Year</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={attendance_year}
                            label="Learning Modality"
                            onChange={handleLearningModality}
                        >
                            <MenuItem value={'Regular'}>Regular</MenuItem>
                            <MenuItem value={'Extension'}>Extension</MenuItem>
                    </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} md={3} sm={4}>
                <FormControl  style={{ float:'left', marginLeft:'80px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Program</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={program}
                            label="Program"
                            onChange={handleProgram}
                        >
                            <MenuItem value={'Degree'}>Degree</MenuItem>
                            <MenuItem value={'Masters'}>Masters</MenuItem>
                            <MenuItem value={'PHD'}>PHD</MenuItem>
                            
                    </Select>
          </FormControl>
        </Grid>
              
              <Grid item xs={2} md={2} sm={2}>
                  <Button variant="contained" color='primary' style={{ width: '100px'}}>Search</Button>
                  
        </Grid>
         */}
                
              
              
              <Grid item xs={12} md={12} sm={12}>
                  <center>
                    <Course_Offering_Table />
                  </center>
               </Grid>
           </Grid>   
    </div>
  )
}

export default View_Course_Offering