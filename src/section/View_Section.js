import React, {useState} from 'react'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import Header from '../others/Header';
import Section_Table from './Section_Table';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
function View_Section() {
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
  return (
    <div >
    <Header/>
      <Grid container spacing={2} style={{ marginTop: '50px' }}>
        {/* <Grid item xs={4} md={3} sm={4}>
                <FormControl  style={{ float:'left', marginLeft:'80px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Department</InputLabel>
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
        <Grid item xs={4} md={3} sm={4}>
                <FormControl  style={{ float:'left', marginLeft:'80px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Learning Modality</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={lm}
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
                  <Button variant="contained" color='primary' style={{ width: '100px',marginLeft:'20px' }} onClick={handleExpand}>
            {
              expand ? 'Collapse' :'Expand'
           }  
          </Button>
        </Grid>
        {
          expand ? 
            <Grid container spacing={3} style={{marginTop:'20px', marginLeft:'190px'}}>
              <Grid item xs={6} md={3} sm={6}>
                    < TextField id="outlined-basic"  style={{width:'300px', align:'left'}}label="First Name" variant="outlined"   size="small"/>
                </Grid>
                <Grid item xs={6} md={3} sm={6}>
                     < TextField id="outlined-basic"  style={{width:'300px', align:'left'}}label="Middle Name" variant="outlined"   size="small"/>
              </Grid>
              <Grid item xs={6} md={3} sm={6}>
                     < TextField id="outlined-basic"  style={{width:'300px', align:'left'}}label="Last Name" variant="outlined"   size="small"/>
              </Grid>
            </Grid> : null

        }
                
               */}
              
              <Grid item xs={12} md={12} sm={12}>
                  <center>
                    <Section_Table />
                  </center>
               </Grid>
           </Grid>   
    </div>
  )
}

export default View_Section