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
import { createAcademic_Calander } from '../action/academic_calander.action';
function Academic_Calander() {
    
    const [academicCalander, setAcademicCalander] = useState({
    title:'',
    type:'',
    issued_no:'',
    academic_year:'',
    doc_no:'',
    reason:'',
    date:'',
    first_semester_registration_start_date:'',
     first_semester_registration_end_date:'',
    first_semester_add_drop_registration_start_date:'',
    first_semester_add_drop_registration_end_date:'',
    first_semester_class_begin:'',
    first_semester_class_end:'',
    first_semester_final_exam_start:'',
    first_semester_final_exam_end:'',
    first_semester_application_for_makeup_start:'',
    first_semester_application_for_makeup_end:'',
    first_semester_grade_submission:'',
    first_semester_makeup_exam_start:'',
    first_semester_makeup_exam_end:'',
    second_semester_registration_start_date:'',
     second_semester_registration_end_date:'',
    second_semester_add_drop_registration_start_date:'',
    second_semester_add_drop_registration_end_date:'',
    second_semester_class_begin:'',
    second_semester_class_end:'',
    second_semester_final_exam_start:'',
    second_semester_final_exam_end:'',
    second_semester_application_for_makeup_start:'',
    second_semester_application_for_makeup_end:'',
    second_semester_grade_submission:'',
    second_semester_makeup_exam_start:'',
    second_semester_makeup_exam_end:''
    })

    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(createAcademic_Calander(academicCalander));
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
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Title" variant="outlined" size="small"
    
                            onChange={(e) => setAcademicCalander({ ...academicCalander, title: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name='type'
                    onChange={(e) => setAcademicCalander({ ...academicCalander, type: e.target.value })}
                        >
                          <MenuItem value={"Regular"}>Regular</MenuItem>
                         <MenuItem value={"Extension"}>Extension</MenuItem> 
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Issued No" variant="outlined" size="small"
                           
                                onChange={(e) => setAcademicCalander({ ...academicCalander, issued_no: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Academic Year" variant="outlined" size="small"
                        name='course_data'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, academic_year: e.target.value })}
                        />
                </Grid>
                
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Doc no" variant="outlined" size="small"
                                
                                onChange={(e) => setAcademicCalander({ ...academicCalander, doc_no: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Reason" variant="outlined" size="small"
                        name='practical_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, reason: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_registration_start_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, first_semester_registration_start_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_registration_end_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, first_semester_registration_end_date: e.target.value })}
                        />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label=" first_semester_add_drop_registration_start_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander,  first_semester_add_drop_registration_start_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label=" first_semester_add_drop_registration_end_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander,  first_semester_add_drop_registration_end_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_registration_start_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, first_semester_registration_start_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_registration_start_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, first_semester_registration_start_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_class_begin" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, first_semester_class_begin: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_class_e d" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, first_semester_class_end: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_final_exam_start" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, first_semester_final_exam_start: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_final_exam_end" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, first_semester_final_exam_end: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_grade_submission" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, first_semester_grade_submission: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_makeup_exam_start" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, first_semester_makeup_exam_start: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_makeup_exam_end" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, first_semester_makeup_exam_end: e.target.value })}
                        />
                </Grid>
                
                  
                        <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_registration_start_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, second_semester_registration_start_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_registration_end_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, second_semester_registration_end_date: e.target.value })}
                        />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label=" second_semester_add_drop_registration_start_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander,  second_semester_add_drop_registration_start_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label=" second_semester_add_drop_registration_end_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander,  second_semester_add_drop_registration_end_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_registration_start_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, second_semester_registration_start_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_registration_start_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, second_semester_registration_start_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_class_begin" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, second_semester_class_begin: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_class_e d" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, second_semester_class_end: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_final_exam_start" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, second_semester_final_exam_start: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_final_exam_end" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, second_semester_final_exam_end: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_grade_submission" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, second_semester_grade_submission: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_makeup_exam_start" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, second_semester_makeup_exam_start: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_makeup_exam_end" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => setAcademicCalander({ ...academicCalander, second_semester_makeup_exam_end: e.target.value })}
                        />
                </Grid>
                
                  
               
                
               
                
            </Grid>
            </CardContent>
            
            <Grid container spacing={3} style={{marginTop:'20px', backgroundColor:'white', padding:'20px'}}>
              <Grid item xs={6}>
                <Button variant='contained' color='primary' style={{width:'200px'}} onClick={handleSubmit}>Submit</Button>      
              </Grid>
              <Grid item xs={6}>
                <Button variant='contained' color='secondary' style={{width:'200px'}} >Reset</Button>      
              </Grid>
            </Grid>
            
          </form>
        </div>
     
  )
}

export default Academic_Calander