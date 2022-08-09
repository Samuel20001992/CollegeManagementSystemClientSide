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
function Academic_Calander(props) {
    

    

    return (
        <div >
        <form autoComplete="off" noValidate >
        {
            props.change == '1'? <div style={{ backgroundColor: '#E7E9EB' }}>
        <CardContent style={{backgroundColor:'white', margin:'6px'}}>
            <Grid container spacing={1} style={{padding:'6px'}}>
           
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Title" variant="outlined" size="small"
    
                            onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, title: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name='type'
                    onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, type: e.target.value })}
                        >
                          <MenuItem value={"Regular"}>Regular</MenuItem>
                         <MenuItem value={"Extension"}>Extension</MenuItem> 
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Issued No" variant="outlined" size="small"
                           
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, issued_no: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Academic Year" variant="outlined" size="small"
                        name='course_data'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, academic_year: e.target.value })}
                        />
                </Grid>
                
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Doc no" variant="outlined" size="small"
                                
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, doc_no: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Reason" variant="outlined" size="small"
                        name='practical_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, reason: e.target.value })}
                        />
                </Grid>
                </Grid>
                </CardContent>
                <CardContent style={{backgroundColor:'white', margin:'6px'}}>
            <Grid container spacing={1} style={{padding:'6px'}}>
           
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_registration_start_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, first_semester_registration_start_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_registration_end_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, first_semester_registration_end_date: e.target.value })}
                        />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label=" first_semester_add_drop_registration_start_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander,  first_semester_add_drop_registration_start_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label=" first_semester_add_drop_registration_end_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander,  first_semester_add_drop_registration_end_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_registration_start_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, first_semester_registration_start_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_registration_start_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, first_semester_registration_start_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_class_begin" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, first_semester_class_begin: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_class_e d" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, first_semester_class_end: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_final_exam_start" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, first_semester_final_exam_start: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_final_exam_end" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, first_semester_final_exam_end: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_grade_submission" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, first_semester_grade_submission: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_makeup_exam_start" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, first_semester_makeup_exam_start: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_makeup_exam_end" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, first_semester_makeup_exam_end: e.target.value })}
                        />
                </Grid>
                </Grid>
                </CardContent>
                </div>: null
             }
             {
            props.change == '2'? <div style={{ backgroundColor: '#E7E9EB' }}>
                <CardContent style={{backgroundColor:'white', margin:'6px'}}>
            <Grid container spacing={1} style={{padding:'6px'}}>
           
                  
                        <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_registration_start_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, second_semester_registration_start_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_registration_end_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, second_semester_registration_end_date: e.target.value })}
                        />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label=" second_semester_add_drop_registration_start_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander,  second_semester_add_drop_registration_start_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label=" second_semester_add_drop_registration_end_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander,  second_semester_add_drop_registration_end_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_registration_start_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, second_semester_registration_start_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_registration_start_date" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, second_semester_registration_start_date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_class_begin" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, second_semester_class_begin: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_class_e d" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, second_semester_class_end: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="first_semester_final_exam_start" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, second_semester_final_exam_start: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_final_exam_end" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, second_semester_final_exam_end: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_grade_submission" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, second_semester_grade_submission: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_makeup_exam_start" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, second_semester_makeup_exam_start: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="second_semester_makeup_exam_end" variant="outlined" size="small"
                        name='tutorial_hour'
                                onChange={(e) => props.setAcademicCalander({ ...props.academicCalander, second_semester_makeup_exam_end: e.target.value })}
                        />
                </Grid>
              
                
               
                
            </Grid>
            </CardContent>

            </div>: null}

          </form>
        </div>
     
  )
}

export default Academic_Calander