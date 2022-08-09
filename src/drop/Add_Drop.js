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
import { createDrop } from '../action/drop.action';
import { getCourse_Registrations } from '../action/course_registration.action';
function Add_Drop() {
    
    const [dropData, setDropData] = useState({
        student_id:'',
    course_code:'',
    accademic_year:'',
    semester:'',
    date:'',
    advisor:'',
    registered_by:''
    })
const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    dispatch(getCourse_Registrations());
  }, [currentId, dispatch]);

  const courses =  useSelector((state) => state.course_registrationReducer);

    const handleCourseCode = (e) => {
        setDropData({ ...dropData, course_code: e.target.value })
  }
  
  const handleSemester = (e) => {
    setDropData({...dropData, semester: e.target.value})
  }

    
    const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createDrop(dropData)); 
  }
    return (
        <div>
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
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Student Id" variant="outlined" size="small"
                     onChange={(e) => setDropData({ ...dropData, student_id: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', width:'230px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Course Code</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value= {dropData.course_code}
                    onChange={handleCourseCode}
                  >
                    {courses.map((course)=>{

                           return (<MenuItem value={course.course_code}>{course.course_code}</MenuItem>)
                    })}
                          
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Academic Year" variant="outlined" size="small"
                        onChange={(e) => setDropData({ ...dropData, accademic_year: e.target.value })}
                        />
                    </Grid>
                     <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', width:'230px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Semester</InputLabel>
                  <Select
                    value={dropData.semester}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleSemester}
                        >
                        <MenuItem value={"1"}>1</MenuItem>
                         <MenuItem value={"2"}>2</MenuItem>
                         <MenuItem value={"3"}>3</MenuItem>   
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Advisor" variant="outlined" size="small"
                        onChange={(e) => setDropData({ ...dropData, advisor: e.target.value })}
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

export default Add_Drop