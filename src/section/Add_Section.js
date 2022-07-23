import React,{useState} from 'react'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import {Modal,Box, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../others/Header';
import Confirm_Table from './Confirm_Table';
import { createSection } from '../action/section.action';
function Add_Section() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  let x = 200;
  const [section, setSection] = useState({
    section_name:'',
    department:'',
    learning_modality:'',
    attendance_year: '',
    curriculum_name:'',
    number_of_students:''
  })
  const [z, setZ] = useState(1);
  let y = 0;
  let t = 0;
  t = y - Math.floor(y);
  t = Math.floor(t * z);
  y = x / z;
  
   const dispatch = useDispatch();
  const handleSubmit = () => {
    for (let i = 1; i <= y; i++)
      section.section_name = section.attendance_year + section.department[0] + section.department[1] + i;
     dispatch(createSection(section))
  }
  return (
    <div>
      <Header/>
      <Grid container spacing={3} style={{marginTop:'50px'}}>
            <Grid item xs={6} md={4} sm={6}>
                <TextField id="outlined-basic" style={{ width: '300px', align: 'left' }}
            label="Department " variant="outlined" size="small"
          onChange={(e)=>setSection({...section, department: e.target.value})}
          />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
                <TextField id="outlined-basic" style={{ width: '300px', align: 'left' }}
            label="Program " variant="outlined" size="small"
          onChange={(e)=>setSection({...section, learning_modality: e.target.value})}
          />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
                <TextField id="outlined-basic" style={{ width: '300px', align: 'left' }}
            label="Attendance Year " variant="outlined" size="small"
          
          onChange={(e)=>setSection({...section, attendance_year: e.target.value})}
          />
        </Grid>
        
        <Grid item xs={6} md={4} sm={6}>
                <TextField id="outlined-basic" style={{ width: '300px', align: 'left' }}
            label="Curriculum Name" variant="outlined" size="small"
          onChange={(e)=>setSection({...section, curriculum_name: e.target.value})}
          />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
                Total Number of newly registered Students in department is: {x}
        </Grid>
        <Grid item xs={6} md={4} sm={6}>
                <TextField id="outlined-basic" style={{ width: '300px', align: 'left' }}
            label="Number of  Students per class" variant="outlined" size="small"
          onChange={(e)=>setZ( e.target.value)}
          />
        </Grid>
        <Grid item xs={6} md={4} sm={6}>
          Number of Sections: {y}
        </Grid>
        <Grid item xs={6} md={4} sm={6}>
                The last Section has : {t}
        </Grid>
        <Grid item xs={6} md={4} sm={6} style={{marginLeft:'250px'}}>
            
          <Button variant='contained' color='primary' onClick={handleOpen}>New Section</Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style} style={{width:'800px', height:'400px'}}>
              <Confirm_Table section={section} y={y} z={z} />
              <Grid item xs={12} md={12} sm={12} style={{marginTop:'50px', marginLeft:'170px'}} >
          
              <Button variant='contained' color='primary' style={{marginRight:'50px', width:'200px'}} onClick={handleSubmit}>Confirm</Button>
          
              <Button variant='contained' color='primary' style={{width:'200px'}} >Cancel</Button>
          </Grid>
                        </Box>
                        </Modal>
            
        </Grid>
        <Grid item xs={6} md={4} sm={6} style={{marginRight:'250px'}}>
          
              <Button variant='contained' color='primary' >Cancel</Button>
          </Grid>
            
        
            
        </Grid>
    </div>
  )
}

export default Add_Section