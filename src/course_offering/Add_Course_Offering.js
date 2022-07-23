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
import { createCourse_Offering } from '../action/course_offering.action';
import { getCourse_Breakdowns } from '../action/course_breakdown.action';
function Add_Course_Offering() {
    const [courseOfferingData, setCourseOfferingData] = useState({
        name:'',
        section:'',
    academic_year:'',
    attendance_year:'',
    semester:'',
    course_breakdown_id:'',
    date:'',
    registered_by:''
    })
    const [dept,setCourse_Code] = useState();
    const handleCourse_Code = (event) => {
        setCourse_Code(event.target.value);
    }

    const handleCourseBreakdown = (e) => {
        setCourseOfferingData({...courseOfferingData, course_breakdown_id: e.target.value})
    } 

    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createCourse_Offering(courseOfferingData)); 
    }
    
  const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    dispatch(getCourse_Breakdowns());
  }, [currentId, dispatch]);

  const courseBreakdowns =  useSelector((state) => state.course_breakdownReducer);


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
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Section" variant="outlined" size="small"
                        name='section'
                                onChange={(e) => setCourseOfferingData({ ...courseOfferingData, section: e.target.value })}
                        />
                        </Grid>
                        <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Name" variant="outlined" size="small"
                        name='name'
                                onChange={(e) => setCourseOfferingData({ ...courseOfferingData, name: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Academic Year" variant="outlined" size="small"
                        name='academic_year'
                                onChange={(e) => setCourseOfferingData({ ...courseOfferingData, academic_year: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Attendance Year" variant="outlined" size="small"
                        name='attendance_year'
                                onChange={(e) => setCourseOfferingData({ ...courseOfferingData, attendance_year: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                    <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Semester</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                                name='semester'
                                value={courseOfferingData.semester}
                    onChange={(e) => setCourseOfferingData({ ...courseOfferingData, semester: e.target.value })}
                    
                        >
                            <MenuItem value={"1"}>1</MenuItem>
                            <MenuItem value={"2"}>2</MenuItem>
                            <MenuItem value={"3"}>3</MenuItem>
                            
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Course Breakdown Id</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={courseOfferingData.course_breakdown_id}
                    label="Course Offering Id"
                    name='course_offering_id'
                    onChange={handleCourseBreakdown}
                        >
                        {courseBreakdowns.map((courseBreakdown)=>{
                            return(    
                                <MenuItem value={courseBreakdown.course_breakdown_id}>{courseBreakdown.course_breakdown_id}</MenuItem>
                            )     
                             }) }      
                                  
                    </Select>
                </FormControl>
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

export default Add_Course_Offering