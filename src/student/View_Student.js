import React, {useState} from 'react'
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Header from '../others/Header';
import Student_Table from './Student_Table';
function View_Student() {
  const [expand, setExpand] = useState(false);
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
                {/* <Grid item xs={8} md={8} sm={8}>
                    < TextField id="outlined-basic"  style={{width:'600px', align:'left'}} label="Id" variant="outlined"  size="small" />
              </Grid>
              <Grid item xs={2} md={2} sm={2}>
                  <Button variant="contained" color='primary' style={{ width: '200px'}}>Search</Button>
              </Grid>
              <Grid item xs={2} md={2} sm={2}>
          <Button variant="contained" color='primary' style={{ width: '200px' }} onClick={handleExpand}>
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
                    <Student_Table />
                  </center>
               </Grid>
           </Grid>   
    </div>
  )
}

export default View_Student