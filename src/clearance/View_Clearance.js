import React, {useState} from 'react'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import Header from '../others/Header';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Clearance from './Clearance';
function View_Clearance() {
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
              <Grid item xs={12} md={12} sm={12}>
                  <center>
                    <Clearance />
                  </center>
               </Grid>
           </Grid>   
    </div>
  )
}

export default View_Clearance