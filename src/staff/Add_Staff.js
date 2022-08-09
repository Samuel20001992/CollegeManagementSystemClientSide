import React,{useState} from 'react'
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import {Grid} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Header from '../others/Header';
import { useDispatch, useSelector } from 'react-redux';
import { createStaff } from '../action/staff.action';
function Add_Staff() {
     const [staffData, setStaffData] = useState({
    first_name:'',
    middle_name:'',
    last_name:'',
    gender:'',
    field_of_study:'',
    academic_rank:'',
    position:'',
    phone:'',
    email:'',
    photo:'',
    role:'',
    employement_type:'',
    status:'',
    registered_by:''} )   
 
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createStaff(staffData)); 
  }

   const handleGender = (e) => {
       setStaffData({...staffData, gender:e.target.value})
    }
   
    return (
        <div>
            
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <CardContent style={{backgroundColor:'white', margin:'6px'}}>
            <Grid container spacing={1} style={{padding:'6px'}}>
                
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="First Name" variant="outlined" size="small"
                    onChange={(e) => setStaffData({ ...staffData, first_name: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Middle Name" variant="outlined" size="small"
                        onChange={(e) => setStaffData({ ...staffData, middle_name: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Last Name" variant="outlined" size="small"
                        onChange={(e) => setStaffData({ ...staffData, last_name: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                    <FormControl  style={{ float:'left', width:'230px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={staffData.gender}
                    label="Gender"
                    onChange={handleGender}
                        >
                         <MenuItem value={'Male'}>Male</MenuItem>
                          <MenuItem value={'Female'}>Female</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Phone" variant="outlined" size="small"
                        onChange={(e) => setStaffData({ ...staffData, phone: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Email" variant="outlined" size="small"
                        onChange={(e) => setStaffData({ ...staffData, email: e.target.value })}
                        />
                </Grid>
              </Grid>
              </CardContent>
              <CardContent style={{backgroundColor:'white', margin:'6px'}}>
             <Grid container spacing={1} style={{padding:'6px'}}>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Field of Study" variant="outlined" size="small"
                        onChange={(e) => setStaffData({ ...staffData, field_of_study: e.target.value })}
                        />
                    </Grid>    
                    <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Academic Rank" variant="outlined" size="small"
                        onChange={(e) => setStaffData({ ...staffData, academic_rank: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Position" variant="outlined" size="small"
                        onChange={(e) => setStaffData({ ...staffData, position: e.target.value })}
                        />
                </Grid>
                
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Photo" variant="outlined" size="small"
                        onChange={(e) => setStaffData({ ...staffData, photo: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Role" variant="outlined" size="small"
                        onChange={(e) => setStaffData({ ...staffData, role: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Employement Type" variant="outlined" size="small"
                        onChange={(e) => setStaffData({ ...staffData, employement_type: e.target.value })}
                        />
                </Grid>   
            </Grid>
            </CardContent>
            
            
            
            <Grid container spacing={3} style={{marginTop:'20px', backgroundColor:'white', padding:'20px'}}>
              <Grid item xs={6}>
                <Button variant='contained' color='primary' style={{width:'200px'}} type='submit'>Submit</Button>      
              </Grid>
              <Grid item xs={6}>
                <Button variant='contained' color='secondary' style={{width:'200px'}} >Reset</Button>      
              </Grid>
            </Grid>
            
          </form>
        </div>
     
  )
}

export default Add_Staff