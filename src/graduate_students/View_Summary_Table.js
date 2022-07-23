import React, {useState} from 'react'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import Header from '../others/Header';
import Grade_Report_Table from '../grade_report/Grade_Report_Table';
import Graduate_Students from './Graduate_Students';
import SummaryTable from './summaryTable';
function View_Summary_Table() {
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
       
       
              <Grid item xs={12} md={12} sm={12}>
                  <center>
                    <SummaryTable />
                  </center>
               </Grid>
           </Grid>   
    </div>
  )
}

export default View_Summary_Table