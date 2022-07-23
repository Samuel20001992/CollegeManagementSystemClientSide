import React,{useState,useEffect} from 'react'
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
import { createDepartment } from '../action/department.action'
import {getStaffs} from '../action/staff.action'
function Add_Department() {
    const [departmentData, setDepartmentData] = useState({
        faculty:'',
    department_name:'',
    department_head:'',
    phone:'',
    email:'',
    start_date:'',
    end_date:'',
    registered_by:''
    })
    const [dept_head,setDept_Head] = useState();
    const handleDepartmentHead = (event) => {
        setDepartment({...departmentData,department_head: event.target.value});
    }

    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createDepartment(departmentData)); 
  }

  const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    dispatch(getStaffs());
  }, [currentId, dispatch]);

  const staffs =  useSelector((state) => state.staffReducer);

    return (
        <div style={{
            backgroundColor: 'white', height: '100vh', border: '1px solid blue' }}>
            <Header />
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <CardContent
            component="form"
            noValidate
            autoComplete="off"
            // className='d-flex'  
                style={{
                marginTop:'50px',
                // marginLeft: '20px',
                // marginRight: '20px',
                marginBottom: '50px',
                    backgroundColor: 'white',
                //  borderRadius:'2em'
            }}
        >
            <Grid container spacing={3}>
                
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Faculty" variant="outlined" size="small"
                     onChange={(e) => setDepartmentData({ ...departmentData, faculty: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Department Name" variant="outlined" size="small"
                        onChange={(e) => setDepartmentData({ ...departmentData, department_name: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Department Head</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleDepartmentHead}
                  >
                    {
                      staffs.map((staff) => {
                        <MenuItem value={staff.staff_id}>{staff.staff_id}</MenuItem>  
                      })
                    }
                        
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Phone" variant="outlined" size="small"
                        onChange={(e) => setDepartmentData({ ...departmentData, phone: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Email" variant="outlined" size="small"
                        onChange={(e) => setDepartmentData({ ...departmentData, email: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Start Date" variant="outlined" size="small"
                        onChange={(e) => setDepartmentData({ ...departmentData, start_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="End Date" variant="outlined" size="small"
                        onChange={(e) => setDepartmentData({ ...departmentData, end_date: e.target.value })}
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

export default Add_Department