import React, {useState} from 'react'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import Header from '../others/Header';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Student_Course_Registration_Table from './Student_Course_Registration_Table';
import SideBar from '../others/SideBar';
function View_Student_Course_Registration() {
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
      <Header />
      <Grid container spacing={2} style={{ marginTop: '50px', float:'left' }}>
              
             <Grid item xs={12} md={12} sm={12}>
                  <center>
                    <Student_Course_Registration_Table />
                  </center>
            </Grid>
           </Grid>   
    </div>
  )
}

export default View_Student_Course_Registration