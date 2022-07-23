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
import { createCourse_Registration } from '../action/course_registration.action';
import { getDepartments } from '../action/department.action';
import { getCourse_Registrations } from '../action/course_registration.action';
function Add_Course() {
    
    const [courseData, setCourseData] = useState({
        course_code:'',
    carriculum_id:'',
    course_title:'',
    credit_hour:'',
    lecture_hour:'',
    practical_hour:'',
    tutorial_hour:'',
    prerequisite:'',
    course_category:'',
    course_category_option:'',
    course_owner:'',
    status:'',
    date:''
    })

    const [curriculum,setCurriculum] = useState();
    const handleCurriculum = (event) => {
        setCurriculum(event.target.value);
    }

    const [courseCategory,setCourseCategory] = useState();
    const handleCourseCategory = (event) => {
        setCourseCategory(event.target.value);
    }

    const [courseCategoryOption,setCourseCategoryOption] = useState();
    const handleCourseCategoryOption = (event) => {
        setCourseCategoryOption(event.target.value);
    }

    const [courseOwner,setCourseOwner] = useState();
    const handleCourseOwner = (event) => {
        setCourseOwner(event.target.value);
    }

    const handlePrerequisite = (e) => {
        setCourseData({...courseData, prerequisite:e.target.value})
    }


    const dispatch = useDispatch();

    const [currentId, setCurrentId] = useState(0);
    useEffect(() => {
        dispatch(getDepartments());
    }, [currentId, dispatch]);

  const departments =  useSelector((state) => state.departmentReducer);

    useEffect(() => {
    dispatch(getCourse_Registrations());
    }, [currentId, dispatch]);
    
     const courses =  useSelector((state) => state.course_registrationReducer);

    const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createCourse_Registration(courseData)); 
  }

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
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Course Code" variant="outlined" size="small"
                            name='course_code'
                            onChange={(e) => setCourseData({ ...courseData, course_code: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Curriculum Id</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name='curriculum_id'
                    onChange={(e) => setCourseData({ ...courseData, carriculum_id: e.target.value })}
                        >
                          <MenuItem value={"1"}>1</MenuItem>
                         <MenuItem value={"2"}>2</MenuItem>
                         <MenuItem value={"3"}>3</MenuItem> 
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Course Title" variant="outlined" size="small"
                            name='course_title'
                                onChange={(e) => setCourseData({ ...courseData, course_title: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Credit Hour" variant="outlined" size="small"
                        name='course_data'
                                onChange={(e) => setCourseData({ ...courseData, credit_hour: e.target.value })}
                        />
                </Grid>
                
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Lecture Hour" variant="outlined" size="small"
                                name='lecture_hour'
                                onChange={(e) => setCourseData({ ...courseData, lecture_hour: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Practical Hour" variant="outlined" size="small"
                        name='practical_hour'
                                onChange={(e) => setCourseData({ ...courseData, practical_hour: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Tutorial Hour" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setCourseData({ ...courseData, tutorial_hour: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Prerequistie</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={courseData.prerequisite}
                    name='prerequiste'
                    onChange={handlePrerequisite}
                                >
                                    {
                                        courses.map((course) => {
                                            return <MenuItem value={course.course_code}>{course.course_code}</MenuItem>
                                        })
                                    }
                          
                         
                    </Select>
                </FormControl>
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Course Category</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name='course_category'
                   onChange={(e) => setCourseData({ ...courseData, course_category: e.target.value })}
                        >
                            <MenuItem value={'Core'}>Core</MenuItem>
                            <MenuItem value={'Eletctive'}>Elective</MenuItem>
                            <MenuItem value={'Supportive'}>Supportive</MenuItem>
                            <MenuItem value={'Common'}>Commoon</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Course Category Option</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name='course_category_option'
                    onChange={(e) => setCourseData({ ...courseData, course_category_option: e.target.value })}
                        >
                            <MenuItem value={'Major Course'}>Major Course</MenuItem>
                            <MenuItem value={'Eletctive One'}>Elective One</MenuItem>
                            <MenuItem value={'Eletctive Two'}>Elective Two</MenuItem>
                            <MenuItem value={'National Requirement'}>National Requirement</MenuItem>
                            <MenuItem value={'University Requirement'}>University Requirement</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Course Owner</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={courseData.course_owner}
                    name='course_owner'
                    onChange={handleCourseOwner}
                                >
                                    {
                                        departments.map((department) => {
                                            return <MenuItem value={department.phone}>{department.phone}</MenuItem>
                                        })
                                    }
                          
                         
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

export default Add_Course