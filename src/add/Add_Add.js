import React,{useState, useEffect} from 'react'
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
import { createAdd } from '../action/add.action';
import axios from 'axios';
import { getCourse_Registrations } from '../action/course_registration.action';
import { getCourse_Offerings } from '../action/course_offering.action';
function Add_Add() {
    const dispatch = useDispatch();
    
    const [addData, setAddData] = useState({
    student_id:'', 
    section:'',
    course_offering_id:'', 
    course_code:'',
    accademic_year:'', 
    semester:'', 
    date:'',
    advisor:'', 
    registered_by:''
    });


const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    dispatch(getCourse_Registrations());
  }, [currentId, dispatch]);

  const courses =  useSelector((state) => state.course_registrationReducer);

    const handleCourseCode = (e) => {
        setAddData({ ...addData, course_code: e.target.value })
    }
    
  useEffect(() => {
    dispatch(getCourse_Offerings());
  }, [currentId, dispatch]);

  const courseOfferings =  useSelector((state) => state.course_offeringReducer);


const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createAdd(addData)); 
  }

    

    const handleCourseOffering = (e) => {
        setAddData({ ...addData, course_offering_id: e.target.value })
    }
    
    return (
        <div style={{
            backgroundColor: 'white', height: '100vh', border: '1px solid blue' }}>
            <Header/>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <CardContent
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
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Student Id" variant="outlined" size="small" name='student_id' onChange={(e) => setAddData({ ...addData, student_id: e.target.value })} />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Course Code</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={addData.course_code}
                    label="Course Code"
                    name='course_code'
                    onChange={handleCourseCode}
                >
                {courses.map((course)=>{
                            return(    
                                <MenuItem value={course.course_code}>{course.course_code}</MenuItem>
                            )     
                             }) }      
                                    
                            
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }}
                            label="Academic Year" variant="outlined" size="small" name='academic_year'
                            onChange={(e) => setAddData({ ...addData, accademic_year: e.target.value })}/>
                    </Grid>
                     <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Section</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={addData.section}
                    label="Department Head"
                    name='section'
                    onChange={handleCourseOffering}
                        >
                        <MenuItem value={"1"}>1</MenuItem>
                         <MenuItem value={"2"}>2</MenuItem>
                         <MenuItem value={"3"}>3</MenuItem>   
                    </Select>
                </FormControl>
                </Grid>
                 <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Course Offering Id</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={addData.course_offering_id}
                    label="Course Offering Id"
                    name='course_offering_id'
                    onChange={handleCourseOffering}
                        >
                        {courseOfferings.map((courseOffering)=>{
                            return(    
                                <MenuItem value={courseOffering.name}>{courseOffering.name}</MenuItem>
                            )     
                             }) }      
                                  
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Advisor" variant="outlined" size="small"
                            name='advisor'
                            onChange={(e) => setAddData({ ...addData, advisor: e.target.value })}/>
                </Grid>
               
               
                    
            </Grid>
            </CardContent>
            
            <Grid container spacing={3} style={{marginTop:'20px', backgroundColor:'white', padding:'20px'}}>
              <Grid item xs={6}>
                <Button variant='contained' color='primary' type='submit' style={{width:'200px'}}>Submit</Button>      
              </Grid>
              <Grid item xs={6}>
                <Button variant='contained' color='secondary' style={{width:'200px'}} >Reset</Button>      
              </Grid>
            </Grid>
           </form> 
          
        </div>
     
  )
}

export default Add_Add